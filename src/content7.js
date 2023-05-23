
import logo1 from './home.png'
import logo2 from './stecker.png'
import logo3 from './soil.png'
import logo4 from './water.png'
import logo5 from './float.png'
import logo6 from './pump.png'
import logo7 from './relay.png'
import Float from './floatbut'
import {Link} from 'react-router-dom'

const Content7 = () => {
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
        <div className="box box-3">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian2'}>Iot Stater Kit</Link></p>
          <p className='text-sm'>HOME AUTO LAMP</p>
        </div>
        </div>
        </div>
        </div>
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-6">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian5'}>IoT Stater Kit</Link></p>
          <p className='text-sm'>HOME AUTO STECKER</p>
        </div>
        </div>
        </div>
        </div>
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-12">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian11'}>IoT Stater Kit</Link></p>
          <p className='text-sm'>SOIL MOISTURE</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        
        <div className="tugas mt-7">
        <div className="section-content ">
        <div className="content-wrapper">       
        <div className="box box-13">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian12'}>IoT Stater Kit</Link></p>
          <p className='text-sm'>WATER FLOW SMART WATERING</p>
        </div></div>
        </div>
        </div>
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-14">
        <div className="first"> 
        </div>

        <div className="second">
        <p className='text-xl'><Link to={'/pengertian13'}>IoT Stater Kit</Link></p>
          <p className='text-sm'>WATER LEVEL FLOAT</p>
        </div>
        </div>
        </div>
        </div>
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-15">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian14'}>IoT Stater Kit</Link></p>
          <p>HOME AUTO WATER PUMP</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="tugas mt-7">
        <div className="section-content ">
        <div className="content-wrapper">       
        <div className="box box-23">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian15'}>IoT Stater Kit</Link></p>
          <p className='text-sm'>HOME AUTO WATERING RELAY</p>
        </div></div>
        </div>
        </div>
        </div>
        </div>
        <Float/>
       </>
     );
}
 
export default Content7;