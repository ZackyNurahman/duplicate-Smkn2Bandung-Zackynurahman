import logo1 from './kotak.jpg'
import logo2 from './home.png'
import logo3 from './auto.jpg'
import logo4 from './sensor.jpeg'
import logo5 from './stecker.png'
import logo6 from './pju.jpg'
import logo7 from './parking.jpg'
import logo8 from './kit.jpg'
import logo9 from './watering.jpg'
import logo10 from './saga.jpg'
import logo11 from './soil.png'
import logo12 from './water.png'
import logo13 from './float.png'
import logo14 from './pump.png'
import logo15 from './relay.png'
import {Link} from 'react-router-dom'


const Content4 = () => {
    return ( 
        <>

         <div className="flex justify-center mt-14  ml-12 overflow-x-hidden rounded-lg text-xl mb-10  " role="group">
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido'}>SEMUA PRODUCT</Link></button>
          <button className="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido1'}>IOT ALAT PERAGA</Link></button>
          <button className="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido2'}>IOT WORKSHOP KIT</Link></button>
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido3'}>IOT STATER KIT</Link></button>
        </div>

      
      <div className="flex flex-row justify-center gap-7 animate__animated animate__bounceInUp ">
      <div className="group relative flex justify-start h-[380px] w-[25%] flex-row bg-black  ">
< img alt="ganti1" id='ganti1'  src={logo1}   className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 ">
        <Link to={'/pengertian1'}> IOT ALAT PERAGA</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"><Link to={'/pengertian1'}> SMART WATERING</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
        </div>
        <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti2" src={logo2} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian2'}> IOT STATER KIT </Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"><Link to={'/pengertian2'}>HOME AUTO LAMP</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
    </div>
    <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti3" src={logo3} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian3'}> IOT ALAT PERAGA </Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"> <Link to={'/pengertian3'}>HOME AUTO</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
    </div>
      </div>
      <div className="flex flex-row justify-center gap-7 animate__animated animate__bounceInUp">
      <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti4" src={logo4} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian4'}> IOT WORKSHOP KIT </Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"> <Link to={'/pengertian4'}>ENVIROMENTAL SENSOR</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
        </div>
        <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti5" src={logo5} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian5'}> IOT STATER KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"><Link to={'/pengertian5'}>HOME AUTO STECKER</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
          <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="Developer" src={logo6} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian6'}>IOT ALAT PERAGA</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"><Link to={'/pengertian6'}>SMART PJU</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-7 animate__animated animate__bounceInUp">
      <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti4" src={logo7} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian7'}>IOT ALAT PERAGA</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"><Link to={'/pengertian7'}>SMART PARKING</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
        </div>
        <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
        <img alt="ganti4" src={logo8} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian8'}>IOT WORKSHOP KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"><Link to={'/pengertian8'}>HOME AUTOMATION,/</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
          <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
          <img alt="ganti4" src={logo9} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 ">
        <Link to={'/pengertian9'}> IOT WORKSHOP KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl"> <Link to={'/pengertian9'}> SMART WATERING,/</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-7 animate__animated animate__bounceInUp">
      <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti4" src={logo10} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian10'}>  IOT WORKSHOP KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">  <Link to={'/pengertian10'}>SMARTCARD SAGA,/</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
        </div>
        <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
        <img alt="ganti4" src={logo11} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian11'}>IOT STATER KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">  <Link to={'/pengertian11'}>SOIL MOISTURE</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
          <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
          <img alt="ganti4" src={logo12} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 ">
        <Link to={'/pengertian12'}>IOT STATER KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">  <Link to={'/pengertian12'}>WATER FLOW SMART WATERING</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-7 animate__animated animate__bounceInUp">
      <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti4" src={logo13} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian13'}> IOT STATER KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">  <Link to={'/pengertian13'}>WATER LEVEL FLOAT</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
        </div>
        <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
        <img alt="ganti4" src={logo14} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
        <Link to={'/pengertian14'}>IOT STATER KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">  <Link to={'/pengertian14'}>HOME AUTO WATER PUMP</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
          <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
          <img alt="ganti4" src={logo15} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 ">
        <Link to={'/pengertian15'}>IOT STATER KIT</Link>
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">  <Link to={'/pengertian15'}>HOME AUTO WATERING RELAY</Link></p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
          </div>
        </div>
       
     
    </>
     );

}
 
export default Content4;