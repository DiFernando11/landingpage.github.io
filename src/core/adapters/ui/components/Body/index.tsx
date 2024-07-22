import Main from './Main';
import ListaGanancias from './ListaGanancias';
import Alerts from './Alerts';
import UsuariosConectados from './UsuariosConectados';
import { useEffect, useState } from 'react';
import BottomModalOferta from './BottomModalOferta';
import BottomOfertaRacha from './BottomOfertaRacha';
import ServicioCliente from './ServicioCliente';
import CommentSection from './ListaComentarios';
import InscripcionForm from './Formulario';
import UltimosCupos from './UltimosCupos';

function Body() {
  const [isRacha, setIsRacha] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRacha(true);
    }, 16000); // 16 segundos

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="container_main m-4">
      <section>
        <Main />
        <ListaGanancias isRacha={isRacha} />
        <UltimosCupos />
        <InscripcionForm />
        <CommentSection />
        <UsuariosConectados />
        <Alerts />
        <BottomModalOferta isRacha={isRacha} />
        <BottomOfertaRacha isRacha={isRacha} />
        <ServicioCliente isRacha={isRacha} />
      </section>
    </main>
  );
}

export default Body;
