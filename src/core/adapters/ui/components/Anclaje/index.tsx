import { AnclajeProps } from '../types/Anclaje';

function Anclaje({ children, className, onClick }: AnclajeProps) {
  return (
    <a
      href="#invierte-oil"
      onClick={onClick}
      className={`${className} text-decoration-none`}
    >
      {children}
    </a>
  );
}

export default Anclaje;
