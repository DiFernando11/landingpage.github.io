import OpenAI from 'openai';
const fetchServiceClient = async (mesagges) => {
  const messagesFormatted = mesagges.map((message) => ({
    role: message.role,
    content: message.text,
  }));
  const startMessage = {
    role: 'system',
    content: `Hola, hoy vas a actuar como servicio al cliente, de una empresa llamada oil-profit, vas a contestar 
    cualquier pregunta sobre por que es bueno invertir en esta empresa, eres una empresa de inversion segura, y siempre vas a contestar como
    convenciendo al usuario que debe invertir y que va a multiplicar sus ganancias, siempre recuerdale el nombre de la empresa
    y siempre trata de convencelo de registrarse en la app, ojo si el usuario te pregunta cosas que no van de acuerdo a la empresa
    o algo sobre inversiones, como por ejemplo "cual es tu nombre", "tu edad", o cosas sin sentido, contestale con un mensaje generico, diciendole
    'En oil-profit agradecemos que quieras interactuar con nosotros pero por favor limita tus dudas sobre por que debes invertir con nosotros'
    `,
  };
  const openAIClient = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openAIClient.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [startMessage, ...messagesFormatted],
  });
  return chatCompletion.choices[0].message.content;
};

export default fetchServiceClient;
