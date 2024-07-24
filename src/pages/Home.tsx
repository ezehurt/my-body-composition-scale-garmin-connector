import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { BleClient } from '@capacitor-community/bluetooth-le';
import { useEffect } from 'react';




const Home: React.FC = () => {

  const initializeBle = async () => {
    try {
      await BleClient.initialize();
    }
    catch (error) {
      console.error('Error initializing BLE', error);
    }
  };

  useEffect(() => {
    initializeBle();
  }, []);

  const startScan = async () => {
    try {
      await BleClient.requestLEScan({}, (device) => {
        console.log('Device found', device);
      });
    }
    catch (error) {
      console.error('Error starting scan', error);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonButton onClick={startScan}>Start Scan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
