import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, InputGroup, Card } from 'react-bootstrap';
import './index.css';
import fetchServiceClient from '../../../../../api/servicioClienteApi';
import Avatar from '../../Avatar';
import logo from '../../../../../../../assets/logo.png';
import avatarImage from '../../../../../../../assets/avatar.png';
import Anclaje from '../../../Anclaje';
import {
  FloatingChatProps,
  MessageProps,
} from '../../../types/ServicioCliente';
import { generateRandomId } from '../../../../../../utils';

const typeUser = {
  role: 'user',
  logo: avatarImage,
  alt: 'Mensaje del usuario',
};
const typeAsistant = {
  role: 'system',
  logo: logo,
  alt: 'Mensaje del asistente',
};

const FloatingChat = ({ setOpenChat, openChat }: FloatingChatProps) => {
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      id: 1,
      text: 'Hola soy la asistente de oil profit, ¿cómo puedo ayudarte?',
      ...typeAsistant,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    setLoadingMessage(true);
    const messageCurrent = [
      ...messages,
      {
        id: messages.length + 1,
        text: input,
        ...typeUser,
      },
    ];
    setMessages(messageCurrent);
    const message = await fetchServiceClient(messageCurrent);
    setLoadingMessage(false);
    setMessages([
      ...messageCurrent,
      {
        id: messages.length + 1,
        text: message,
        ...typeAsistant,
      },
    ]);
    setInput('');
  };

  const handleClose = () => {
    setOpenChat(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!openChat) return;

  return (
    <div className={'floating-chat-container'}>
      <Card
        className="floating-chat shadow-lg position-fixed bottom-0 end-0"
        style={{ width: '300px', height: '350px' }}
      >
        <Card.Header className="bg-red d-flex justify-content-between align-items-center bg-red text-white">
          <span>Pregúntanos</span>
          <div className="cursor-pointer" onClick={handleClose}>
            x
          </div>
        </Card.Header>
        <Card.Body className="chat-body overflow-auto d-flex flex-column">
          <div className="messages">
            {messages.map((message) => (
              <div className="d-flex flex-column" key={generateRandomId()}>
                <div
                  className={`d-flex gap-2 ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <Avatar alt={message.alt} src={message.logo} />
                  <div
                    key={message.id}
                    className={`message p-2 rounded mb-2 ${
                      message.role === 'user' ? 'emisor' : 'sistema'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
                {message.role === 'system' && (
                  <Anclaje
                    onClick={handleClose}
                    className="text-end text-decoration-none fs-min mb-3"
                  >
                    Invierte con nostros
                  </Anclaje>
                )}
              </div>
            ))}

            {loadingMessage && (
              <div className="d-flex gap-2">
                <Avatar alt={typeAsistant.alt} src={typeAsistant.logo} />
                <div className="loading-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </Card.Body>
        <Card.Footer className="d-flex">
          <InputGroup className="w-100">
            <Form.Control
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
            />
            <Button
              variant="light"
              type="submit"
              className="bg-red text-white"
              onClick={handleSendMessage}
            >
              Enviar
            </Button>
          </InputGroup>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FloatingChat;
