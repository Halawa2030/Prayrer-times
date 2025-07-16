
import './App.css';
import MainContent from './components/MainContent';
import Container from '@mui/material/Container';
import Prayerinfo1 from './Pages/Prayerinfo1';
import Prayerinfo2 from './Pages/Prayerinfo2';
import Prayerinfo3 from './Pages/Prayerinfo3';
import Prayerinfo4 from './Pages/Prayerinfo4';
import Prayerinfo5 from './Pages/Prayerinfo5';
import { Route, Routes } from 'react-router-dom';
import Profial from './Pages/Profial';
import Prayerson1 from './Pages/Prayerson1';
import Prayerson2 from './Pages/Prayerson2';
import Prayerson3 from './Pages/Prayerson3';
import Prayerson4 from './Pages/Prayerson4';
import Prayerson5 from './Pages/Prayerson5';
import Prayerson6 from './Pages/Prayerson6';
import Prayerson7 from './Pages/Prayerson7';
import Prayerson8 from './Pages/Prayerson8';
import Prayerson9 from './Pages/Prayerson9';
import Prayerson10 from './Pages/Prayerson10';
import Prayerson11 from './Pages/Prayerson11';
import Prayerson12 from './Pages/Prayerson12';
import Prayerson13 from './Pages/Prayerson13';

function App() {
  return (
    <div className="mainDiv">
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/prayer/fajer" element={<Prayerinfo1 />} />
          <Route path="/prayer/duher" element={<Prayerinfo2 />} />
          <Route path="/prayer/asr" element={<Prayerinfo3 />} />
          <Route path="/prayer/maghrab" element={<Prayerinfo4 />} />
          <Route path="/prayer/isha" element={<Prayerinfo5 />} />
          <Route path="/profile" element={<Profial />} />
          <Route path="/istikhaarah" element={<Prayerson1 />}/>
          <Route path="/repentance" element={<Prayerson2 />}/>
          <Route path="/need" element={<Prayerson3 />}/>
          <Route path="/tasbeeh" element={<Prayerson4 />}/>
          <Route path="/istisqa" element={<Prayerson6 />}/>
          <Route path="/Tahajjud" element={<Prayerson7 />}/>
          <Route path="/Kusoff" element={<Prayerson8 />}/>
          <Route path="/Tarahwee" element={<Prayerson9 />}/>
          <Route path="/Witer" element={<Prayerson10 />}/>
          <Route path="/Duha" element={<Prayerson11 />}/>
          <Route path="/Masjid" element={<Prayerson12 />}/>
          <Route path="/Quiam" element={<Prayerson13 />}/>
          <Route path="/eid" element={<Prayerson5 />}/>

        </Routes>
      </Container>
    </div>
  );
}

export default App;