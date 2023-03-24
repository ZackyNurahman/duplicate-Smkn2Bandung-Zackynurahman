import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './home';
import About from './about';
import Layanan from './layanan';
import Tekido from './tekido';
import Contak from './contak';
import Tekido1 from './tekido1';
import Tekido2 from './tekido2';
import Tekido3 from './tekido3';
import Kontakdata from './crud';
import Contak1 from './contak1';
import Pengertian1 from './pengertian1';
import Content4 from './content4';
import Pengertian2 from './pengertian2';
import Pengertian3 from './pengertian3';
import Pengertian4 from './pengertian4';
import Pengertian5 from './pengertian5';
import Pengertian6 from './pengertian6';
import Pengertian7 from './pengertian7';
import Pengertian8 from './pengertian8';
import Pengertian9 from './pengertian9';
import Pengertian10 from './pengertian10';
import Pengertian11 from './pengertian11';
import Pengertian12 from './pengertian12';
import Pengertian13 from './pengertian13';
import Pengertian14 from './pengertian14';
import Pengertian15 from './pengertian15';

function App() {
  return (
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='/tekido' element={<Tekido />} />
        <Route path='/contak' element={<Contak />} />
        <Route path='/tekido1' element={<Tekido1 />} />
        <Route path='/tekido2' element={<Tekido2 />} />
        <Route path='/tekido3' element={<Tekido3 />} />
        <Route path='/pengertian1' element={<Pengertian1 />} />
        <Route path='/pengertian2' element={<Pengertian2 />} />
        <Route path='/pengertian3' element={<Pengertian3 />} />
        <Route path='/pengertian4' element={<Pengertian4/>} />
        <Route path='/pengertian5' element={<Pengertian5 />} />
        <Route path='/pengertian6' element={<Pengertian6/>} />
        <Route path='/pengertian7' element={<Pengertian7 />} />
        <Route path='/pengertian8' element={<Pengertian8 />} />
        <Route path='/pengertian9' element={<Pengertian9 />} />
        <Route path='/pengertian10' element={<Pengertian10 />} />
        <Route path='/pengertian11' element={<Pengertian11 />} />
        <Route path='/pengertian12' element={<Pengertian12 />} />
        <Route path='/pengertian13' element={<Pengertian13 />} />
        <Route path='/pengertian14' element={<Pengertian14 />} />
        <Route path='/pengertian15' element={<Pengertian15 />} />
        <Route path='/admin' element={<Kontakdata/>} />
  </Routes>
  );
}

export default App;
