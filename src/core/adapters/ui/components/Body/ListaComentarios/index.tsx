import { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { fetchCommentsItems } from '../../../../api/listaComentarios';
import { generateRandomId } from '../../../../../utils';
import Comentarios from './Comentarios';
const initial = {
  id: 1,
  text: 'Oil Profit es una empresa de inversiones excepcional. ¡Acabó de ganar una gran cantidad de dinero con ellos! Si buscas una forma segura y rentable de hacer crecer tus finanzas, te invito a invertir con Oil Profit. ¡No pierdas esta oportunidad de asegurar tu futuro financiero!',
  name: 'Juan Pérez',
  avatar: 'https://i.pravatar.cc/150?img=3',
  like: 323,
  time: 23,
  isFijado: true,
};

const CommentSection = () => {
  const allComments = fetchCommentsItems();
  const items = 6;
  const [comments, setComments] = useState(allComments.slice(0, items));
  const [view, setView] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const maximum = items + view;
      const nextComment = allComments.slice(view, maximum);
      setComments(nextComment);
      setView((prev) => (allComments.length === maximum ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [view]);

  return (
    <Container fluid className="mt-5 w-100">
      <Row className="justify-content-center">
        <Col md={12}>
          <h3>Comentarios</h3>
          <ListGroup className="mb-3">
            {[initial, ...comments].map((comment) => (
              <Comentarios
                key={generateRandomId()}
                avatar={comment.avatar}
                text={comment.text}
                name={comment.name}
                like={comment.like}
                time={comment.time}
                isFijado={comment?.isFijado}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CommentSection;
