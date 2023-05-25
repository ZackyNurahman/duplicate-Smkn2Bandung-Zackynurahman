import logo1 from './kotak.jpg'
import logo2 from './auto.jpg'
import logo6 from './pju.jpg'
import logo7 from './parking.jpg'
import Float from './floatbut'
import TekidoCard from './tekidocard'
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

<div className='animate__animated animate__bounceInUp flex flex-col items-center'>
<div className="tugas mt-7">
<TekidoCard judul="SMART WATERING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System -Smart Watering 4.0" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-2" link="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-watering-4-0/SLSK-0003-00027"/>
<TekidoCard judul="HOME AUTO " kategori="IOT ALAT PERAGA" caption="Stater Kit - Homeauto Pushbutton 4.0 " harga="Rp 750.915" foto="w-full rounded-l-lg box box-4" link="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009"/>

        </div>
        <div className="tugas mt-7">
        <TekidoCard judul="SMART PJU" kategori="IOT ALAT PERAGA " caption="ALAT PERAGA Smart System - Smart PJU 4.0 Smart PJU (Penerangan Jalan Umum)" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-7" link="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-pju-4-0/SLSK-0003-00022"/>
        <TekidoCard judul="SMART PARKING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System - Parking System 4.0" harga="Rp 38.171.512" foto="w-full rounded-l-lg box box-8" link="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-parking-4-0/SLSK-0003-00025"/>
        </div>
        </div>


        <Float/>
      </>
     );
}
 
export default Content5;