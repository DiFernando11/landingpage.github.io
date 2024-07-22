import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Anclaje from '../../Anclaje';
import { AnimatedButtonProps } from '../../types/AnimatedButton';

const AnimatedButton = ({ handleClose }: AnimatedButtonProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('text-slide-in');

  const buttonTexts = [
    '¡Regístrate y Gana!',
    '¡Aprovecha Ya!',
    '¡Sé Parte del Éxito!',
    '¿Qué estas esperando?',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('text-slide-out');
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
        setAnimationClass('text-slide-in');
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      onClick={handleClose}
      className={`animated-button m-auto d-block bg-red mt-2 py-2 ${animationClass}`}
    >
      <Anclaje className="text-white"> {buttonTexts[textIndex]}</Anclaje>
    </Button>
  );
};

export default AnimatedButton;
