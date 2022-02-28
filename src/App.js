import './App.css';
import GridExample from './components/Data';
import { Paragraph } from './components/Paragraph';
import { SaveData } from './components/SaveData';
import { AddSpace } from './components/AddSpace';
import {data} from './components/utils/data';
import {useState} from 'react';
import {Globe} from './components/Globe'
import { RuxGlobalStatusBar, RuxClock, RuxModal, RuxLog, RuxNotification, RuxClassificationMarking } from "@astrouxds/react";
function App() {
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    modalTitle: '',
    open: false,
    closeAfter: ''
  })

  window.addEventListener('ruxmodalclosed', () => {
   //Set state & do cool shit
   setNotification({
     show: false,
     message: '',
     modalTitle: '',
     open: false,
     closeAfter: ''
   })
  })
  return (
    <div className="App">
      <RuxClassificationMarking classification="unclassified" />
      <RuxNotification open={notification.open} status={notification.status} message={notification.message} closeAfter={notification.closeAfter} />
      <RuxModal modalMessage="Are you ready?" modalTitle="Welcome to Astro World" open={notification.open}/>
    <RuxGlobalStatusBar >
        <RuxClock
         
        ></RuxClock>
      </RuxGlobalStatusBar>
        <Paragraph />
        <GridExample></GridExample>
        <AddSpace />
        <SaveData setNotification={setNotification}/>
        <AddSpace />
        <RuxLog data={data} />
        <h5>
          1. TODO: Make API Call to show SBIRS data in AgGrid;
          2. Mock more faster data transitions - it's cool and show off power. 
          3. Add Grafana/Prometheus to visualize performance
          4. Add vercel/something to begin automatic deployment. 
          5. Add Cesium Globe to better mock MVP
          6. Add user login page
          7. Add backend to persist user data(Java/PostgreSQL)
          8. Add Data Visualization -preferably data from AgGrid, but static is fine. 
          9. Add AI/Neural Networks for certain components or Optimizely
          10.Add Kafka/Event-Driven feedback/webhooks
        </h5>
        <AddSpace />
        <AddSpace />
        <div>
        <AddSpace />
        <AddSpace />
        {/* <TestIFrame /> */}
        </div>
    </div>
  );
}

export default App;

