import logo1 from './kotak.jpg'
import logo2 from './auto.jpg'
import logo6 from './pju.jpg'
import logo7 from './parking.jpg'
import {Link} from 'react-router-dom'

const Content5 = () => {
    return ( 
        <>
       <div className="flex justify-center mt-14  ml-12 overflow-x-hidden rounded-lg text-xl mb-10" role="group">
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido'}>SEMUA PRODUCT</Link></button>
          <button className="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido1'}>IOT ALAT PERAGA</Link></button>
          <button className="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido2'}>IOT WORKSHOP KIT</Link></button>
          <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido3'}>IOT STATER KIT</Link></button>
        </div>

      <div className="flex flex-row justify-center gap-7 animate__animated animate__bounceInUp ">
      <div className="group relative flex justify-start h-[380px] w-[25%] flex-row bg-black">
      <img alt="ganti1" id='ganti1' src={logo1} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 ">
         IOT ALAT PERAGA
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">SMART WATERING</p>
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
        IOT ALAT PERAGA
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">HOME AUTO </p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
    </div>
    <div className="group relative flex justify-start h-[380px] w-[25%] mb-10  flex-row bg-black">
      <img alt="ganti3" src={logo6} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500">
          IOT ALAT PERAGA
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">SMART PJU</p>
        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          </div>
        </div>
          </div>
    </div>
      </div>
      <div className="flex flex-row ml-[161px] gap-7 animate__animated animate__bounceInUp w-[101%]  mb-12 ">
      <div className="group relative flex justify-start h-[380px] w-[25%] flex-row bg-black">
      <img alt="ganti1" id='ganti1' src={logo7} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-pink-500 ">
        IOT ALAT PERAGA
        </p>
        <p className="text-xl font-bold text-white sm:text-2xl">SMART PARKING</p>
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
 
export default Content5;