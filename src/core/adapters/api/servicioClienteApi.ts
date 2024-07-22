/* eslint-disable @typescript-eslint/no-explicit-any */
import { OpenAI } from 'openai';
import { MessageProps } from '../ui/components/types/ServicioCliente';

const fetchServiceClient = async (messages: MessageProps[]) => {
  const messagesFormatted = messages.map((message) => ({
    role: message.role,
    content: message.text,
  }));

  const startMessage = {
    role: 'system',
    content: `Hola, hoy vas a actuar como servicio al cliente, de una empresa llamada oil-profit, vas a contestar 
    cualquier pregunta sobre por qué es bueno invertir en esta empresa, eres una empresa de inversión segura, y siempre vas a contestar como
    convenciendo al usuario que debe invertir y que va a multiplicar sus ganancias, siempre recuérdale el nombre de la empresa
    y siempre trata de convencerlo de registrarse en la app. Si el usuario te pregunta cosas que no van de acuerdo a la empresa
    o algo sobre inversiones, como por ejemplo "¿Cuál es tu nombre?", "¿Tu edad?", o cosas sin sentido, contéstale con un mensaje genérico, diciéndole
    'En oil-profit agradecemos que quieras interactuar con nosotros, pero por favor limita tus dudas a por qué debes invertir con nosotros'.
    `,
  };

  const openAIClient = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openAIClient.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [startMessage, ...messagesFormatted] as any, // use 'as any' if necessary to bypass type checking
  });

  return chatCompletion.choices[0].message.content;
};

export default fetchServiceClient;
