import { useState } from 'react';

import FloatingButton from './FloatingButton';
import FloatingChat from './FloatingChat';

const ServicioCliente = ({ isRacha }: { isRacha: boolean }) => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div>
      <FloatingButton
        isRacha={isRacha}
        setOpenChat={setOpenChat}
        openChat={openChat}
      />
      <FloatingChat openChat={openChat} setOpenChat={setOpenChat} />
    </div>
  );
};

export default ServicioCliente;
