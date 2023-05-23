import logo1 from './sensor.jpeg'
import logo2 from './kit.jpg'
import logo4 from './watering.jpg'
import logo5 from './saga.jpg'
import Float from './floatbut'
import {Link} from 'react-router-dom'

const Content6 = () => {
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
        <div className="box box-5">
        <div className="first"> 
        </div>

        <div className="second">
        <p className='text-xl'><Link to={'/pengertian4'}>IoT Workshop Kit</Link></p>
          <p className='text-sm'><a href="#">ENVIROMENTAL SENSOR</a></p>
        </div>
        </div>
        </div>
        </div>
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-9">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian8'}>IoT Workshop Kit</Link></p>
          <p className='text-sm'><a href="#">HOME AUTOMATION</a></p>
        </div>
        </div>
        </div>
        </div>
        <div className="section-content ">
        <div className="content-wrapper">       
        <div className="box box-10">
        <div className="first">
        </div>
        <div className="second">
        <p className='text-xl'><Link to={'/pengertian9'}>IoT Workshop Kit</Link></p>
          <p className='text-sm'><a href="#">SMART WATERING</a></p>
        </div></div>
        </div>
        </div>
        </div>

        <div className="tugas mt-7">
        <div className="section-content">
        <div className="content-wrapper">       
        <div className="box box-21">
        <div className="first"> 
        </div>

        <div className="second">
        <p className='text-xl'><Link to={'/pengertian10'}>IoT Workshop Kit</Link></p>
          <p className='text-sm'><a href="#">SMARTCARD SAGA</a></p>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      <Float/>
      </>
     );
}
 
export default Content6;