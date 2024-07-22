import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import logoAyuda from '../../../../../../../assets/ayuda.gif';
import { FloatingButtonProps } from '../../../types/ServicioCliente';

const FloatingButton = ({
  isRacha,
  setOpenChat,
  openChat,
}: FloatingButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!openChat) {
      setIsAnimating(false);
    }
  }, [openChat]);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setOpenChat(true), 300);
  };

  return (
    <div
      className={`floating-button position-fixed rounded-circle d-flex justify-content-center align-items-center cursor-pointer p-4 bg-red ${
        isAnimating ? 'slide-out' : openChat ? 'hide' : 'slide-in bounce'
      }`}
      style={{ bottom: isRacha ? '12px' : '160px' }}
      onClick={handleClick}
    >
      <Image src={logoAyuda} alt="Ayuda" width={50} height={50} />
    </div>
  );
};

export default FloatingButton;
