import { Image, ListGroup } from 'react-bootstrap';
import Avatar from '../../Avatar';
import { generateRandomNumber } from '../../../../../../utils';
import estrella from '../../../../../../../assets/estrella.png';
import logoOil from '../../../../../../../assets/logo.png';
import logoLike from '../../../../../../../assets/me-gusta.gif';
import Anclaje from '../../../Anclaje';

const Comentarios = ({
  avatar,
  text,
  name,
  like,
  time,
  isFijado,
}: {
  isFijado?: boolean;
  avatar: string;
  text: string;
  name: string;
  like: number;
  time: number;
}) => {
  return (
    <ListGroup.Item className="d-flex gap-2 py-3 position-relative">
      <Avatar width={50} height={50} src={avatar} alt={`avatar de ${name}`} />
      <div className="">
        <span className="fw-bold color_blue_name">{name}</span>
        <p className="mb-2">{text}</p>
        <span className="fw-bold fs-6">
          {time || generateRandomNumber(23)}H
        </span>
        <div className="d-flex gap-3 justify-content-between">
          <div className="d-flex gap-3 ">
            <Anclaje className="d-flex gap-3 text-black">
              <span className="d-lg-block d-none">Me gusta</span>
              <span>Respuesta</span>
              <Image className='d-lg-block d-none' src={logoLike} alt="me gusta" width={24} height={24} />
            </Anclaje>
            <span className='d-lg-block d-none'>{like || generateRandomNumber(100)}</span>
          </div>
          {isFijado && (
            <Anclaje className="text-black d-lg-block d-none">
              <div className="d-flex gap-3 aling-items-center cursor-pointer">
                <p className="fw-bold mb-0">¿Y tú, qué estás esperando?</p>
                <Avatar src={logoOil} alt="Oil Profil" />
              </div>
            </Anclaje>
          )}
        </div>
      </div>
      {isFijado && (
        <Image
          className="position-absolute comentario-fijado"
          src={estrella}
          alt="Comentario Fijado"
          width={33}
          height={33}
        />
      )}
    </ListGroup.Item>
  );
};

export default Comentarios;
