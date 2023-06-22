import { Spin as Hamburger } from 'hamburger-react';
import React, { useState, useEffect } from 'react';
import logo from './log.png'
import './nav.css';
import {Link} from 'react-router-dom'
import Dropdown from './dropdown';

function Nav() {
  const [navbarClass, setNavbarClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setNavbarClass('sticky');
    } else {
      setNavbarClass('');
    }
  };

  const [drop, setDrop]=useState(false);

  return (
    <nav className={navbarClass} class=' text-lg'>
    
      <ul>
        <li className='flex items-center gap-3 text-white  text-lg font-medium'><a href='/home'><img src={logo}  alt="logo" className="w-25 h-10" /></a>LSKK</li>
      </ul>
      <ul className='ml-72 flex relative sm:flex-col md:flex-row '>
        <li className='hidden md:block'>  <a href='/home' className='hover:text-blue-300'>Beranda</a></li>
        <li className='hidden md:block'>  <a href='/about' className='hover:text-blue-300'>Tentang Kami</a></li>
        <li className='hidden md:block'>  <a href='/layanan' className='hover:text-blue-300'>Layanan</a></li>
        <li className='hidden md:block'>  <a href='/tekido' className='hover:text-blue-300'>Product</a></li>
        <li className='hidden md:block'>  <a href='/contak' className='hover:text-blue-300'>Hubungi Kami</a></li>
        <li className='block md:hidden'>  <Hamburger color='white' onToggle={()=>{setDrop(!drop)}}/></li>
        <Dropdown open={drop}/>
      </ul>
      
    </nav>
 
  );
}


export default Nav;