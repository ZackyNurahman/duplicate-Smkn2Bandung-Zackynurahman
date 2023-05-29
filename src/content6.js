import logo1 from './sensor.jpeg'
import logo2 from './kit.jpg'
import logo4 from './watering.jpg'
import logo5 from './saga.jpg'
import Float from './floatbut'
import TekidoCard from './tekidocard'
import {Link} from 'react-router-dom'

const Content6 = () => {
    return ( 
        <>
 <div className="flex justify-center mt-48  ml-12 overflow-x-hidden rounded-lg text-xl mb-10" role="group">
          <Link to={'/tekido'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 rounded-l-lg hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">SEMUA PRODUCT</button></Link>
          <Link to={'/tekido1'}> <button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border- border-gray-900 hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT ALAT PERAGA</button></Link>
          <Link to={'/tekido2'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border- border-gray-900 hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT WORKSHOP KIT</button></Link>
          <Link to={'/tekido3'}><button className="px-4 py-2 text-lg font-medium text-gray-900 bg-transparent border-t border-b border-r border-gray-900 rounded-r-lg hover:bg-[#2E6695]  hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-[#2E6695]  focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">IOT STATER KIT</button></Link>
</div>

<div className='animate__animated animate__bounceInUp flex flex-col items-center'>
<div className="tugas mt-7">
<TekidoCard judul="ENVIROMENTAL SENSOR " kategori="IOT WORKSHOP KIT" caption="IoT Kit - Enviromental Sensor 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-5" link1={<a href="https://www.tokopedia.com/lskkstore/smart-envi-sensor-suhu-ruangan-alat-praktek-sekolah?extParam=whid%3D8931991" className='' >Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009" target='_blank'>Blibli</a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3529660-iot-kit--enviromental-sensor' >Telkom</a>}/> 
<TekidoCard judul="HOME AUTOMATION" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Home Automation 4.0" harga="Rp 2.377.897" foto="w-full rounded-l-lg box box-9" link1={<a href='https://www.tokopedia.com/lskkstore/smart-home-otomasi-stecker-lampu-terminal-alat-praktek-sekolah?extParam=whid%3D8931991' className=' '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/iot-kit-home-automation-4-0/SLSK-0003-00018" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
   </div>
   <div className='tugas mt-7'>
   <TekidoCard judul="SMART WATERING" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Smart Watering 4.0" harga="Rp 1.752.135" foto="w-full rounded-l-lg box box-10" link1={<a href='https://www.tokopedia.com/lskkstore/smart-watering-sensor-kelembaban-tanah-alat-praktek-smk?extParam=whid%3D8931991' className=' '> Tokopedia</a>} link2={<a href='https://siplah.blibli.com/product/iot-kit-smart-watering-4-0/SLSK-0003-00010'>Blibli </a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3535271-iot-kit--smart-watering' className=''>Telkom</a>}/>
   <TekidoCard judul="SMARTCARD SAGA" kategori="IOT WORKSHOP KIT" caption=" IoT Kit - Smartcard Saga 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-11" link1={<a href="https://www.tokopedia.com/lskkstore/smart-absensi-sensor-rfid-alat-absensi?extParam=whid%3D8931991" className=''> Tokopedia</a>} link2={"https://siplah.blibli.com/product/iot-kit-smartcard-saga-4-0/SLSK-0003-00023"} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3635358-iot-kit--smart-saga-rfid' className=''>Telkom</a>}/>
   </div>
    
        </div>
          
      <Float/>
      </>
     );
}
 
export default Content6;