import logo1 from './kotak.jpg'
import logo2 from './auto.jpg'
import logo6 from './pju.jpg'
import logo7 from './parking.jpg'
import {Link} from 'react-router-dom'
import './cnt.css'

const Content5 = () => {
    return ( 
        <>
     <div className="flex justify-center mt-14  ml-12 overflow-x-hidden rounded-lg text-xl mb-10" role="group">
          <Link to={'/tekido'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 rounded-l-lg hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">SEMUA PRODUCT</button></Link>
          <Link to={'/tekido1'}> <button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border- border-gray-900 hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT ALAT PERAGA</button></Link>
          <Link to={'/tekido2'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border- border-gray-900 hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT WORKSHOP KIT</button></Link>
          <Link to={'/tekido3'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 rounded-r-lg hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT STATER KIT</button></Link>
</div>

<div className='animate__animated animate__bounceInUp'>
<div className="tugas mt-7">
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-2">
        <div className="first"> 
        </div>

        <div className="second">
        <p className='text-xl'><Link to={'/pengertian1'}>Iot Alat Peraga</Link></p>
          <p className='text-sm'>SMART WATERING</p>
        </div>
        </div>
        </div>
        </div>
        <div className="section-content ">
        <div className="content-wrapper">       
        <div className="box box-4">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian3'}>Iot Alat Peraga</Link></p>
          <p className='text-sm'>HOME AUTO</p>
        </div></div>
        </div>
        </div>
        <div className="section-content ">
        <div className="content-wrapper">       
        <div className="box box-7">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian6'}>Iot Alat Peraga</Link></p>
          <p className='text-sm'>SMART PJU</p>
        </div></div>
        </div>
        </div>
        </div>
        <div className="tugas mt-7">
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-20">
        <div className="first"> 
        </div>

        <div className="second">
        <p className='text-xl'><Link to={'/pengertian7'}>Iot Alat Peraga</Link></p>
          <p className='text-sm'>SMART PARKING</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </>
     );
}
 
export default Content5;