import { GananciasProps } from '../../../types/Ganancias';

const Lista = ({ name, ganancia, ciudad, isRacha }: GananciasProps) => {
  return (
    // LIST GROUP
    <div className="d-flex gap-3">
      <div>{name}</div>
      <div>{ganancia}</div>
      <div>{ciudad}</div>
      {isRacha && <div>{'tiene racha'}</div>}
    </div>
  );
};

export default Lista;
