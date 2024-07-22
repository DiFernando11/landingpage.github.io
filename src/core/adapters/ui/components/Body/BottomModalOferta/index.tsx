import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import AnimatedButton from '../AnimatedButton';

const BottomModalOferta = ({ isRacha }: { isRacha: boolean }) => {
  const [visible, setVisible] = useState(true);
  const [animationClass, setAnimationClass] = useState('slide-in');

  const handleClose = () => {
    setAnimationClass('slide-out');
    setTimeout(() => setVisible(false), 500);
  };

  useEffect(() => {
    if (isRacha) {
      handleClose();
    }
  }, [isRacha]);

  return (
    <div
      style={{ zIndex: '8000' }}
      className={`w-100 d-flex justify-content-center fixed-bottom border-top border-dark ${animationClass}`}
    >
      <Alert
        variant="light"
        onClose={handleClose}
        dismissible
        show={visible}
        className="w-100 mb-0 image-bottom-ganancias d-flex justify-content-center align-items-center"
      >
        <div>
          <p className="text_alert_oferta fw-bold mb-lg-0 mb-3">
            Regístrate en Oil Profit y recibe 20% en bonificación sobre tu
            primera inversión.
          </p>
          <AnimatedButton handleClose={handleClose} />
        </div>
      </Alert>
    </div>
  );
};

export default BottomModalOferta;
