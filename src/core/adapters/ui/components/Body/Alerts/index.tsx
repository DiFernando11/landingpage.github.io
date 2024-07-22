import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import AlertaNormal from './AlertaNormal';
import Anclaje from '../../Anclaje';
import { fetchAlertItems } from '../../../../api/listaAlertas';
import { AlertItems } from '../../types/Alerts';
import { generateRandomId } from '../../../../../utils';

function Alerts() {
  const itemsAlerts = fetchAlertItems();

  const [alerts, setAlerts] = useState<AlertItems[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prevAlerts) => {
        const newAlerts = [...prevAlerts];
        if (newAlerts.length >= 2) {
          newAlerts.shift();
        }
        newAlerts.push(itemsAlerts[currentIndex]);
        return newAlerts;
      });

      setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsAlerts.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="d-flex position-fixed end-0 p-3 flex-column-reverse align-items-end alert-container">
      {alerts.map((alert, index) => (
        <Anclaje key={generateRandomId()}>
          <div
            className={`custom-alert ${
              index === alerts.length - 1 ? 'slide-in-y' : ''
            }`}
          >
            <Alert
              variant="light"
              className={`py-3 d-flex shadow-card align-items-center ${
                alert.isRacha
                  ? 'background-image-racha'
                  : 'image-alert-ganancias'
              }`}
              dismissible
              onClose={() =>
                setAlerts((prevAlerts) =>
                  prevAlerts.filter((a) => a.id !== alert.id)
                )
              }
            >
              <AlertaNormal
                avatar={alert.avatar}
                name={alert.name}
                deposito={alert.deposito}
                ganancia={alert.ganancia}
                isRacha={alert.isRacha}
                message= {alert.message}
              />
            </Alert>
          </div>
        </Anclaje>
      ))}
    </div>
  );
}

export default Alerts;
