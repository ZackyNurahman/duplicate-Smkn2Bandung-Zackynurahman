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
import Content4 from './content4';


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
        <Route path='/admin' element={<Kontakdata/>} />
  </Routes>
  );
}

export default App;
