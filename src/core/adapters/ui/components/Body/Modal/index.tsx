import { useEffect, useState } from 'react';
import logoOil from '../../../../../../assets/logo.png';
import { Button, Modal } from 'react-bootstrap';
import Avatar from '../Avatar';
import Anclaje from '../../Anclaje';

function ModalOferta({ showModal }: { showModal: boolean }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (showModal) {
      handleShow();
    }
  }, [showModal]);

  return (
    <Modal show={show} onHide={handleClose} centered className="">
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="d-flex gap-3 align-items-center">
            <Avatar src={logoOil} alt="Oil Profil" width={28} height={28} />
            ¡Ultima oportunidad!
            <Avatar src={logoOil} alt="Oil Profil" width={28} height={28} />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="background-image-racha">
        <p>
          ¡Última oportunidad! No dejes pasar esta oferta exclusiva. Aprovecha
          un <b>50%</b> de descuento en tu primera inversión.
          <b>¡No lo volverás a ver!</b>
        </p>
        <strong>¡Únete a los ganadores hoy mismo!</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="danger" onClick={handleClose}>
          <Anclaje className='text-white'>¡Invierte Ahora!</Anclaje>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalOferta;
