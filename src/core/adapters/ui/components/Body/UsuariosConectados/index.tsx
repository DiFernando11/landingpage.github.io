import { useState, useEffect } from 'react';
import { Alert, Image } from 'react-bootstrap';
import { generateRandomNumber } from '../../../../../utils';
import logoOjo from '../../../../../../assets/ojo.gif';

const UsuariosConectados = () => {
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState(generateRandomNumber(200));

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prevUsers) => prevUsers + generateRandomNumber(300));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`usuarios-conectados d-flex justify-content-end ${
        show ? 'slide-in-x' : 'slide-out-x'
      }`}
    >
      <Alert variant="" show={show} className="mb-0">
        <div className="d-flex justify-conten-center aling-items-center gap-2">
          <Image
            src={logoOjo}
            alt="Usuarios conectados"
            width={36}
            height={36}
          />
          <span className="lh-lg text-white fw-bold">
            Usuarios conectados: {users}
          </span>
        </div>
      </Alert>
    </div>
  );
};

export default UsuariosConectados;
