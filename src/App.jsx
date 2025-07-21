
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import MainContent from './components/MainContent';
// import { ThemeContextProvider } from './components/ThemeContext';
// import Container from '@mui/material/Container';

// import QiblaPage from './Pages/QiblaPage';

// import Prayerinfo1 from './Pages/Prayerinfo1';
// import Prayerinfo2 from './Pages/Prayerinfo2';
// import Prayerinfo3 from './Pages/Prayerinfo3';
// import Prayerinfo4 from './Pages/Prayerinfo4';
// import Prayerinfo5 from './Pages/Prayerinfo5';
// import Profial from './Pages/Profial';
// import Prayerson1 from './Pages/Prayerson1';
// import Prayerson2 from './Pages/Prayerson2';
// import Prayerson3 from './Pages/Prayerson3';
// import Prayerson4 from './Pages/Prayerson4';
// import Prayerson6 from './Pages/Prayerson6';
// import Prayerson7 from './Pages/Prayerson7';
// import Prayerson8 from './Pages/Prayerson8';
// import Prayerson9 from './Pages/Prayerson9';
// import Prayerson10 from './Pages/Prayerson10';
// import Prayerson11 from './Pages/Prayerson11';
// import Prayerson12 from './Pages/Prayerson12';
// import Prayerson13 from './Pages/Prayerson1';
// import Azkar1 from './Azkar/Azkar1';
// import Azkar2 from './Azkar/Azkar2';
// import Azkar3 from './Azkar/Azkar3';
// import Azkar4 from './Azkar/Azkar4';
// import Azkar5 from './Azkar/Azkar5';
// import Azkar6 from './Azkar/Azkar6';
// import AzkarMainPage from './Pages/AzkarMainPage';
// import SunanMainPage from './Pages/SunanMainPage';
// import QuranPage from './Pages/QuranPage';


// function App() {
//   return (
//     <ThemeContextProvider>
//       <div className="mainDiv">
//         <Container maxWidth="lg" sx={{ p: 0, width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//           <Routes>
//             <Route path="/" element={<MainContent />} />
//             <Route path="/prayer/fajer" element={<Prayerinfo1 />} />
//             <Route path="/prayer/duher" element={<Prayerinfo2 />} />
//             <Route path="/prayer/asr" element={<Prayerinfo3 />} />
//             <Route path="/prayer/maghrab" element={<Prayerinfo4 />} />
//             <Route path="/prayer/isha" element={<Prayerinfo5 />} />
//             <Route path="/profile" element={<Profial />} />
//             <Route path="/istikhaarah" element={<Prayerson1 />}/>
//             <Route path="/repentance" element={<Prayerson2 />}/>
//             <Route path="/need" element={<Prayerson3 />}/>
//             <Route path="/tasbeeh" element={<Prayerson4 />}/>
//             <Route path="/istisqa" element={<Prayerson6 />}/>
//             <Route path="/Tahajjud" element={<Prayerson7 />}/>
//             <Route path="/Kusoff" element={<Prayerson8 />}/>
//             <Route path="/Tarahwee" element={<Prayerson9 />}/>
//             <Route path="/Witer" element={<Prayerson10 />}/>
//             <Route path="/Duha" element={<Prayerson11 />}/>
//             <Route path="/Masjid" element={<Prayerson12 />}/>
//             <Route path="/Quiam" element={<Prayerson13 />}/>
//             <Route path="/azkar/morning" element={<Azkar1 />}/>
//             <Route path="/azkar/evening" element={<Azkar2 />}/>
//             <Route path="/azkar/sleep" element={<Azkar3 />}/>
//             <Route path="/azkar/wake-up" element={<Azkar4 />}/>
//             <Route path="/azkar/after-prayer" element={<Azkar5 />}/>
//             <Route path="/azkar/general" element={<Azkar6 />}/>
//             <Route path="/azkar" element={<AzkarMainPage />} />
//             <Route path="/sunan" element={<SunanMainPage />} />
//             <Route path="/quran" element={<QuranPage />} />
//             <Route path="/qibla" element={<QiblaPage />} />
//           </Routes>
//         </Container>
//       </div>
//     </ThemeContextProvider>
//   );
// }

// export default App;
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import Container from '@mui/material/Container';

import Prayerinfo1 from './Pages/Prayerinfo1';
import Prayerinfo2 from './Pages/Prayerinfo2';
import Prayerinfo3 from './Pages/Prayerinfo3';
import Prayerinfo4 from './Pages/Prayerinfo4';
import Prayerinfo5 from './Pages/Prayerinfo5';
import Profial from './Pages/Profial';
import Prayerson1 from './Pages/Prayerson1';
import Prayerson2 from './Pages/Prayerson2';
import Prayerson3 from './Pages/Prayerson3';
import Prayerson4 from './Pages/Prayerson4';
import Prayerson6 from './Pages/Prayerson6';
import Prayerson7 from './Pages/Prayerson7';
import Prayerson8 from './Pages/Prayerson8';
import Prayerson9 from './Pages/Prayerson9';
import Prayerson10 from './Pages/Prayerson10';
import Prayerson11 from './Pages/Prayerson11';
import Prayerson12 from './Pages/Prayerson12';
import Prayerson13 from './Pages/Prayerson1';
import Azkar1 from './Azkar/Azkar1';
import Azkar2 from './Azkar/Azkar2';
import Azkar3 from './Azkar/Azkar3';
import Azkar4 from './Azkar/Azkar4';
import Azkar5 from './Azkar/Azkar5';
import Azkar6 from './Azkar/Azkar6';
import AzkarMainPage from './Pages/AzkarMainPage';
import SunanMainPage from './Pages/SunanMainPage';
import QuranPage from './Pages/QuranPage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
  
      <div className="mainDiv">
        <Container maxWidth="lg" sx={{ p: 0, width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
            <Route path="/azkar/morning" element={<Azkar1 />}/>
            <Route path="/azkar/evening" element={<Azkar2 />}/>
            <Route path="/azkar/sleep" element={<Azkar3 />}/>
            <Route path="/azkar/wake-up" element={<Azkar4 />}/>
            <Route path="/azkar/after-prayer" element={<Azkar5 />}/>
            <Route path="/azkar/general" element={<Azkar6 />}/>
            <Route path="/azkar" element={<AzkarMainPage />} />
            <Route path="/sunan" element={<SunanMainPage />} />
            <Route path="/quran" element={<QuranPage />} /> {/* <--- مسار صفحة القرآن */}
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Container>
      </div>
  );
}

export default App;