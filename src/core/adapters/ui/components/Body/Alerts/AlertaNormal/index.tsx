import Avatar from '../../Avatar';
import logoOil from '../../../../../../../assets/logo.png';
import logoCash from '../../../../../../../assets/cash.gif';
import logoFuego from '../../../../../../../assets/fuego-unscreen.gif';
import { Image } from 'react-bootstrap';
import { AlertGenerica } from '../../../types/AlertGenerica';

const AlertaNormal = ({
  avatar,
  name,
  deposito,
  ganancia,
  isRacha,
  message,
}: AlertGenerica) => {
  return (
    <div className="d-flex gap-4 align-items-center mw-alert">
      <div className="position-relative">
        <Avatar src={avatar} alt="avatar" width={48} height={48} />
        <div className={`position-absolute image-oil-alert`}>
          <Avatar src={logoOil} alt="Oil Profil" width={28} height={28} />
        </div>
      </div>
      <div>
        <p className="fw-bold mb-0 color_blue_name">{name}</p>
        {isRacha && (
          <p className="fw-bold mb-0 txt-red">¡Racha, racha, racha!</p>
        )}

        <span className="fw-bold">
          {!isRacha
            ? message
            : '¡Acaba de generar una millonaria cantidad de dinero!'}
        </span>
        <div className="d-lg-flex d-block gap-3 fw-bold">
          <div className="d-flex gap-1">
            <span className="color_blue_name">Inversión:</span>
            <span>${deposito}</span>
          </div>
          <div className="d-flex gap-1">
            <span className="color_blue_name">Ganancia:</span>
            <span>${ganancia}</span>
            <Image
              alt="Ganancia"
              src={isRacha ? logoFuego : logoCash}
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertaNormal;
