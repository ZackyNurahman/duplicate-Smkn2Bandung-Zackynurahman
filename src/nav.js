import logo from './log.png'
import {Link} from 'react-router-dom'

const Nav = () => {
    return ( 
        <header className="shadow-md flex flex-col py-3 px-5 md:px-20 md:flex-row absolute w-full">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" className="w-25 h-10" />
          <div className='ml-2 text-xl text-white font-medium'>LSKK</div>
          <button className="block md:hidden" id="toggleMenuButton"><i className="fa fa-bars" aria-hidden="true" />
          </button>
        </div>
        <nav className="bg-transparent hidden transition delay-75 md:block md:flex-grow pt-5 md:pt-0" id="navMenu">
          <ul className="flex flex-col md:flex-row md:justify-end md:items-center md:h-full">
            <li className="d-block hover:text-blue-600 px-2 py-1 transition delay-75 md:rounded text-white font-bold md:mr-2 ">
            <Link to={'/home'}>Beranda</Link>
            </li>
            <li className="hover:text-blue-600 px-2 py-1 transition delay-75 text-white font-bold md:rounded md:mr-2">
            <Link to={'/about'}>Tentang kami</Link>
            </li>
            <li className="hover:text-blue-600 px-2 py-1 transition delay-75 text-white font-bold md:rounded md:mr-2">
            <Link to={'/layanan'}>Layanan</Link>
            </li>
            <li className="hover:text-blue-600 px-2 py-1 mb-2 transition delay-75 text-white font-bold md:rounded md:mr-2 md:mb-0">
            <Link to={'/tekido'}>Tekido</Link>
            </li>
            <li className="hover:text-blue-600 px-2 py-1 mb-2 transition delay-75 text-white font-bold md:rounded md:mr-2 md:mb-0">
            <Link to={'/contak'}>Hubungi kami</Link>
            </li>
          </ul>
        </nav>
      </header>


     );
}
 
export default Nav;