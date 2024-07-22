import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import AnimatedButton from '../AnimatedButton';
import ModalOferta from '../Modal';

function BottomOfertaRacha({ isRacha }: { isRacha: boolean }) {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [showModal, setShowModal] = useState(false);

  console.log(isRacha, visible, 'VISIBLE');

  const handleClose = () => {
    setVisible(false);
    setShowModal(true);
  };

  useEffect(() => {
    if (isRacha) {
      const timer = setTimeout(() => {
        setAnimationClass('slide-in-right');
        setVisible(true);
      }, 500); // 16 segundos

      return () => clearTimeout(timer);
    }
  }, [isRacha]);

  useEffect(() => {
    if (!visible) {
      setAnimationClass('slide-out-left');
    }
  }, [visible]);

  return (
    <div
      className={`w-100 d-flex justify-content-center fixed-bottom ${animationClass}`}
    >
      <Alert
        variant="light"
        onClose={handleClose}
        dismissible
        show={visible}
        className="w-100 mb-0 background-image-racha"
      >
        <div className="d-flex justify-content-center flex-column">
          <AnimatedButton handleClose={() => setVisible(false)} />
          <p className="text_alert_oferta text-center fw-bold color_blue_name mt-3">
            Celebremos juntos, Ana García acaba de generar una racha ganadora de
            $100000. Aprovecha esta unica oportunidad a y obtén un 50% de
            descuento en tu próxima inversión.
          </p>
        </div>
      </Alert>
      <ModalOferta showModal={showModal} />
    </div>
  );
}

export default BottomOfertaRacha;
