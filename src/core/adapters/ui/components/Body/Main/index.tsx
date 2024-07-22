import { fetchTextApp } from '../../../../api/textApi';
import { fetchImageApp } from '../../../../api/imageApi';
import Anclaje from '../../Anclaje';

function Main() {
  const { titlePage } = fetchTextApp();
  const { imageMain, otrasFuentes, imageSection, anuncioImage } =
    fetchImageApp();
  return (
    <div className="container_text_main justify-content-center fs-7">
      <h1>
        <Anclaje>{titlePage}</Anclaje>
      </h1>

      <div>
        <img className="w-100" src={otrasFuentes} />
        <img className="w-100 mb-3" src={imageMain} />
      </div>
      <p>
        Hoy quiero compartir contigo la emocionante experiencia de mi inversión
        en <Anclaje>Oil Profit</Anclaje>, un startup que revolucionó mis
        percepciones sobre lo posible en el mundo de la tecnología e
        <Anclaje>inteligencia artificial.</Anclaje>
      </p>

      <p>
        Cuando el equipo de <Anclaje>Oil Profit</Anclaje> me contacto el otoño
        pasado, capturaron mi atención de inmediato. Su proyecto ambicioso,
        centrado en avanzar en la computación cuántica, me inspiró. Siempre he
        valorado las <Anclaje>innovaciones</Anclaje> y las tecnologías futuras,
        y <Anclaje>Oil Profit</Anclaje> presentó algo extraordinario: el
        potencial uso de la computación cuántica en aplicaciones del
        <Anclaje> mundo real</Anclaje>, desde la optimización de procesos
        empresariales hasta la <Anclaje>investigación médica.</Anclaje>
      </p>
      <p>
        Reconociendo el potencial de este proyecto, tomé la decisión de invertir
        en <Anclaje>Oil Profit</Anclaje>. Nuestra colaboración comenzó justo
        después de nuestro encuentro, y nos sumergimos en la realización de sus{' '}
        <Anclaje>ideas ambiciosas</Anclaje>. Invertí no solo mi dinero, sino
        también mi experiencia empresarial. Juntos, formulamos una estrategia de
        marketing sólida y un plan de promoción del producto, y asistí al equipo
        de <Anclaje>Oil Profit</Anclaje> en la creación de un modelo de negocio
        eficiente que tuviera éxito a largo plazo.
      </p>
      <p>
        Los primeros meses estuvieron llenos de trabajo arduo y emoción.
        <Anclaje>Oil Profit</Anclaje> desarrolló activamente sus tecnologías,
        perfeccionándolas para aplicaciones industriales. Nuestro equipo pasó
        incontables horas explorando nuevas posibilidades e ideando soluciones
        innovadoras. Cada día nos acercaba al momento en que nuestro{' '}
        <Anclaje>producto</Anclaje>
        estuviera listo para el lanzamiento al mercado.
      </p>
      <p>
        Sin embargo, debido al rápido crecimiento y la emoción asociada con este
        éxito, tuvimos que cancelar el anuncio de esta plataforma y eliminar
        toda la información al respecto de Internet para manejar la abrumadora
        atención e <Anclaje>investigaciones</Anclaje>. El increíble interés
        público y la atención mediática subrayaron la importancia de nuestro
        trabajo y demostraron cómo las tecnologías de
        <Anclaje> Oil Profit</Anclaje> podrían cambiar el mundo.
      </p>

      <img className="w-100 mb-3" src={imageSection} />
      <p>
        Por supuesto, estos desafíos no nos detuvieron. Finalmente, se abrió el
        acceso a inversiones, lo que permitió que <Anclaje>Oil Profit</Anclaje>
        desplegara todo su potencial. Después de seis meses de esfuerzos
        diligentes, lanzamos con éxito <Anclaje>Oil Profit</Anclaje>. Sus
        cálculos cuánticos se volvieron indispensables en diversas industrias.
        Se utilizaron en investigaciones médicas para analizar vastas cantidades
        de datos, en el sector financiero para optimizar estrategias de
        inversión e incluso en el campo de la inteligencia artificial para
        entrenar aprendizaje automático basado en algoritmos cuánticos.
      </p>

      <p>
        En tan solo seis meses desde mi inversión,{' '}
        <Anclaje>Oil Profit </Anclaje>
        alcanzó alturas asombrosas. El valor de mi inversión se multiplicó
        varias veces, y obtuve impresionantes <Anclaje>₡8 100 000</Anclaje>.
        pero sinceramente, para mí, se trataba de algo más que dinero. Encontré
        una mayor satisfacción al presenciar cómo nuestro proyecto estaba
        cambiando el mundo que nos rodea.
      </p>
      <p>
        <Anclaje>Oil Profit</Anclaje> hizo que la computación cuántica fuera
        accesible y útil para un amplio público. Creamos{' '}
        <Anclaje>tecnologías</Anclaje> que ayudan a resolver problemas complejos
        de manera más rápida y eficiente. Contribuimos a la ciencia, la medicina
        y el progreso tecnológico. Sin embargo, esto fue solo el comienzo.
        Continuamos explorando, creciendo y evolucionando, desbloqueando nuevas
        posibilidades para el futuro.
      </p>
      <p>
        <Anclaje>
          Esta historia no es solo el relato exitoso de un inversionista y una
          startup.{' '}
        </Anclaje>
        Es una historia sobre cómo la creencia en la innovación, el esfuerzo
        persistente y los esfuerzos colaborativos pueden cambiar el mundo.
      </p>
      <p>
        Anuncio oficialmente que estoy abriendo el acceso a{' '}
        <Anclaje>la plataforma</Anclaje>, pero los lugares serán limitados. Las
        primeras 100 personas afortunadas que hayan enviado su solicitud después
        de ver el anuncio en Facebook podrán invertir. Es muy sencillo; si
        tienes la suerte de convertirte en participante, espera una llamada de
        uno de nuestros gerentes y te ayudarán a comenzar lo antes posible. Ten
        en cuenta que la inversión mínima es de <Anclaje>₡135 000.</Anclaje>
      </p>
      <img className="p-0 w-100 mt-2" src={anuncioImage} />
      <div className="bg-secondary-subtle py-4 fs-6 px-2">
        ¡Confia en nostros como Natalia Díaz! , contamos con la certificación y
        la confianza de empresas reconocidas como Invers Group, Start Money y
        Red Cash.
      </div>
    </div>
  );
}

export default Main;
