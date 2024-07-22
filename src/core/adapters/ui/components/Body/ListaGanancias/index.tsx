import { useEffect, useState } from 'react';
import { fetchGananciasItems } from '../../../../api/listaGananciasApi';
import logoOil from '../../../../../../assets/logo.png';
import Avatar from '../Avatar';
import RoundedCard from './RoundedCard';

const initial = {
  ciudad: 'Ciudad',
  nombre: 'Nombre',
  ganancias: 'Ganancia',
  isTitle: true,
  isRacha: false,
  avatar: '',
};

function ListaGanancias({ isRacha }: { isRacha: boolean }) {
  const [posiciones, setPosiciones] = useState(fetchGananciasItems());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosiciones((prevPosiciones) => fetchGananciasItems(prevPosiciones));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isRacha) {
      setPosiciones((prevPosiciones) => {
        const updatedPosiciones = [...prevPosiciones];
        if (updatedPosiciones.length > 0) {
          updatedPosiciones[0] = { ...updatedPosiciones[0], isRacha: true };
        }
        return fetchGananciasItems(updatedPosiciones);
      });
    }
  }, [isRacha]);

  return (
    <div>
      <div className="d-flex gap-3 align-items-center mt-5">
        <h2 className="fs-4">
          Ganancias de los usuarios del día anterior en Oil Profit
        </h2>
        <Avatar src={logoOil} alt="Oil Profil" />
      </div>
      <p className="mb-5">
        Los datos se actualizan en tiempo real, desde la plataforma oficial de
        Oil Profit.
      </p>

      <div className="d-flex flex-column">
        {posiciones.length > 0 &&
          [initial, ...posiciones].map((usuario, index) => (
            <RoundedCard
              key={index}
              ciudad={usuario.ciudad}
              ganancia={usuario.ganancias}
              name={usuario.nombre}
              isRacha={usuario.isRacha}
              isTitle={usuario.isTitle}
              avatar={usuario.avatar}
            />
          ))}
      </div>
    </div>
  );
}

export default ListaGanancias;
