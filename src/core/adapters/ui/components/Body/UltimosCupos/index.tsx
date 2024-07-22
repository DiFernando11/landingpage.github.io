import { useEffect, useState } from 'react';

function UltimosCupos() {
  const [count, setCount] = useState(32);
  const formatter = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 1 ? 32 : prevCount - 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = formatter.format(new Date());
  return (
    <div>
      <h4 className="fw-bold mb-3 mt-5">
        ¡Últimas Plazas Disponibles en Oil Profit!
      </h4>
      <p className="mb-5 fs-7" id='invierte-oil'>
        ¡Noticias de Última Hora! A partir de hoy, <b>{formattedDate}</b> , Oil
        Profit ha alcanzado casi su capacidad total. Para mantener nuestras
        altas ganancias por usuario, solo podemos aceptar un número limitado de
        nuevos inversores. En este momento, ¡solo quedan <b>{count}</b> lugares
        disponibles! No pierdas esta oportunidad única de asegurar tu lugar y
        comenzar a ganar con nosotros. Regístrate ahora y asegura tu futuro
        financiero antes de que sea demasiado tarde.
      </p>
    </div>
  );
}

export default UltimosCupos;
