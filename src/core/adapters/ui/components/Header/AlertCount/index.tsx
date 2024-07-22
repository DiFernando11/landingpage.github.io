import { Navbar } from 'react-bootstrap';
import logoOil from '../../../../../../assets/logo.png';
import CountdownTimer from '../../CountDownTimer';
import Avatar from '../../Body/Avatar';
import Anclaje from '../../Anclaje';

const AlertCount = () => {
  return (
    <Anclaje className="text-white">
      <Navbar fixed="top" variant="dark" className="bg-red">
        <div className="d-flex gap-3 justify-content-between w-100 px-3">
          <div className="d-flex gap-2 justify-content-center align-items-center fw-bold mb-0 fs-7">
            <Avatar src={logoOil} alt="Oil Profil" width={28} height={28} />
            <span className="d-lg-block d-none">OIL PROFIT</span>
          </div>
          <p className="mb-0 fs-7 d-lg-block d-none">
            40% de descuento en tu primera inversión por tiempo limitado!
          </p>
          <p className="mb-0 fs-6 d-block d-lg-none">
            40% de descuento por tiempo limitado!
          </p>
          <CountdownTimer />
        </div>
      </Navbar>
    </Anclaje>
  );
};

export default AlertCount;
