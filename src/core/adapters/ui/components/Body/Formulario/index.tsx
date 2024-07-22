import { useState } from 'react';
import logoOil from '../../../../../../assets/logo.png';
import { Container, Row, Form, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Avatar from '../Avatar';

const InscripcionForm = () => {
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    setValidated(true);
    setShowAlert(true);
  };

  return (
    <Container className="inscripcion-form mt-5 position-relative">
      <Row className="justify-content-center">
        <div className="title_form text-center mb-4 p-3 bg-red rounded-top fs-8 text-white fw-bold">
          ¡Inscripción Gratuita por Tiempo Limitado!
        </div>
        {showAlert && <Alert variant="success">¡Inscripción exitosa!</Alert>}
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="px-lg-5"
        >
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control
              required
              type="text"
              className="py-3"
              placeholder="Nombre"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa tu nombre.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              required
              type="email"
              placeholder="Correo electronico"
              className="py-3"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un correo electrónico válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <PhoneInput
              country={'ec'}
              inputProps={{
                required: true,
                name: 'phone',
              }}
              containerClass="w-100"
              inputClass="phone-input"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un número de teléfono válido.
            </Form.Control.Feedback>
          </Form.Group>

          <button
            className="button-inscribirse w-100"
            data-hover="Asegura Tu Cupo"
          >
            <div>Empieza a Ganar Hoy</div>
          </button>

          {/* <Button variant="primary" type="submit" className="w-100">
            Enviar
          </Button> */}
        </Form>
      </Row>
      <Avatar
        src={logoOil}
        alt="Oil Profit"
        className="position-absolute top-50 start-50 translate-middle opacity-min pointer-none back-formulario"
      />
    </Container>
  );
};

export default InscripcionForm;
