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
import TekidoCard from './tekidocard'
import Float from './floatbut'
import {Link} from 'react-router-dom'
import './cnt.css'



const Content4 = () => {


    return ( 
        <>

<div className="flex justify-center mt-14  ml-12 overflow-x-hidden rounded-lg text-xl mb-10 animate__animated animate__fadeInLeftBig animate__delay-1s" role="group">
          <Link to={'/tekido'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 rounded-l-lg hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">SEMUA PRODUCT</button></Link>
          <Link to={'/tekido1'}> <button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border- border-gray-900 hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT ALAT PERAGA</button></Link>
          <Link to={'/tekido2'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border- border-gray-900 hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT WORKSHOP KIT</button></Link>
          <Link to={'/tekido3'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 rounded-r-lg hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT STATER KIT</button></Link>
</div>

<div className='animate__animated animate__fadeInUp animate__delay-1s flex flex-col items-center'>
<div className="tugas mt-7 gap-[2px]">
        <TekidoCard judul="SMART WATERING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System -Smart Watering 4.0" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-2" link="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-watering-4-0/SLSK-0003-00027"/>
        <TekidoCard judul="HOME AUTO LAMP" kategori="IOT STATER KIT" caption="Stater Kit - Lamp 4.0  " harga="Rp 920.621" foto="w-full rounded-l-lg box box-3" link="https://siplah.blibli.com/product/stater-kit-lamp-4-0/SLSK-0003-00024"/>

      

 
        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="HOME AUTO " kategori="IOT ALAT PERAGA" caption="Stater Kit - Homeauto Pushbutton 4.0 " harga="Rp 750.915" foto="w-full rounded-l-lg box box-4" link="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009"/>
        <TekidoCard judul="ENVIROMENTAL SENSOR " kategori="IOT WORKSHOP KIT" caption="IoT Kit - Enviromental Sensor 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-5" link="https://siplah.blibli.com/product/iot-kit-enviromental-sensor-4-0/SLSK-0003-00014"/>

        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="HOME AUTO STECKER" kategori="IOT STATER KIT" caption="Stater Kit - Homeauto Stecker 4.0" harga="Rp 813.491" foto="w-full rounded-l-lg box box-6" link="https://siplah.blibli.com/product/stater-kit-homeauto-stecker-4-0/SLSK-0003-00016"/>
        <TekidoCard judul="SMART PJU" kategori="IOT ALAT PERAGA " caption="ALAT PERAGA Smart System - Smart PJU 4.0 Smart PJU (Penerangan Jalan Umum)" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-7" link="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-pju-4-0/SLSK-0003-00022"/>
  

      </div>

        <div className="tugas mt-7">
        <TekidoCard judul="SMART PARKING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System - Parking System 4.0" harga="Rp 38.171.512" foto="w-full rounded-l-lg box box-8" link="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-parking-4-0/SLSK-0003-00025"/>
        <TekidoCard judul="HOME AUTOMATION" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Home Automation 4.0" harga="Rp 2.377.897" foto="w-full rounded-l-lg box box-9" link="https://siplah.blibli.com/product/iot-kit-home-automation-4-0/SLSK-0003-00018"/>

       </div>

        <div className="tugas mt-7">
        <TekidoCard judul="SMART WATERING" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Smart Watering 4.0" harga="Rp 1.752.135" foto="w-full rounded-l-lg box box-10" link="https://siplah.blibli.com/product/iot-kit-smart-watering-4-0/SLSK-0003-00010"/>
        <TekidoCard judul="SMARTCARD SAGA" kategori="IOT WORKSHOP KIT" caption=" IoT Kit - Smartcard Saga 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-11" link="https://siplah.blibli.com/product/iot-kit-smartcard-saga-4-0/SLSK-0003-00023"/>

        </div>
    
        <div className="tugas mt-7">
        <TekidoCard judul="SOIL MOISTURE" kategori="IOT STATER KIT" caption="Stater Kit - Soil Moisture 4.0" harga="Rp 750.915" foto="w-full rounded-l-lg box box-12" link="https://siplah.blibli.com/product/stater-kit-soil-moisture-4-0/SLSK-0003-00007"/>
        <TekidoCard judul="WATER FLOW SMART WATERING" kategori="IOT STATER KIT" caption="Stater Kit - Water Flow Smart Watering 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-13" link="https://siplah.blibli.com/product/stater-kit-water-flow-smart-watering-4-0/SLSK-0003-00021"/>

        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="WATER LEVEL FLOAT" kategori="IOT STATER KIT" caption="Water Level Float 4.0" harga="Rp 938.643" foto="w-full rounded-l-lg box box-14" link="https://siplah.blibli.com/product/stater-kit-water-level-float-4-0/SLSK-0003-00011"/>
        <TekidoCard judul="HOME AUTO WATER PUMP" kategori="IOT STATER KIT" caption="Stater Kit - Homeauto Water Pump 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-15" link="https://siplah.blibli.com/product/stater-kit-homeauto-water-pump-4-0/SLSK-0003-00019"/>

        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="HOME AUTO WATERING RELAY" kategori="IOT STATER KIT" caption="Stater Kit - Smart Watering Relay 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-14" link="https://siplah.blibli.com/product/stater-kit-smart-watering-relay-4-0/SLSK-0003-00006"/>
        </div>

        </div>
        <Float/>
  
      
      </>
     );

}
 
export default Content4;