import { Image, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Avatar from '../../Avatar';
import logoCash from '../../../../../../../assets/cash.gif';
import logoFuego from '../../../../../../../assets/fuego-unscreen.gif';
import { TablaGanancias } from '../../../types/TableGanancias';

const RoundedCard = ({
  ciudad,
  ganancia,
  name,
  isTitle,
  isRacha,
  avatar,
}: TablaGanancias) => {
  const styleButton = `flex-33 mb-2 py-3 text-dark fw-bold fs-6 ${
    isRacha ? 'background-image-racha' : ''
  } ${isTitle && 'bg-red text-white'}`;

  return (
    <ToggleButtonGroup
      type="checkbox"
      className={`d-flex w-100 toggle-btn-black-border pointer-none`}
    >
      <ToggleButton
        id="btncheck1"
        variant="outline-primary"
        value={1}
        className={`${styleButton}`}
      >
        <div className="d-flex gap-2 align-items-center justify-content-center">
          {!isTitle && <Avatar src={avatar} alt={`avatar ${name}`} />}
          <span className={`${!isTitle && 'd-none d-lg-block'}`}> {name} </span>
          {isRacha && (
            <Image src={logoFuego} alt="En racha" width={32} height={32} />
          )}
        </div>
      </ToggleButton>
      <ToggleButton
        id="btncheck2"
        variant="outline-primary"
        value={2}
        className={styleButton}
      >
        <div className="d-flex gap-2 align-items-center justify-content-center">
          <span> {isTitle ? ganancia : `₡${ganancia}`}</span>
          {!isTitle && (
            <Image
            className='d-none d-lg-block'
              src={logoCash}
              alt={`ganancias ${ganancia}`}
              style={{ width: '28px', height: '28px' }}
            />
          )}
        </div>
      </ToggleButton>
      <ToggleButton
        id="btncheck3"
        variant="outline-primary"
        value={3}
        className={styleButton}
      >
        {isRacha ? `${ciudad} (En racha)` : ciudad}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RoundedCard;
