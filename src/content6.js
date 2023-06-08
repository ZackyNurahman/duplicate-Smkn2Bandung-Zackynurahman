import logo1 from './sensor.jpeg'
import logo2 from './kit.jpg'
import logo4 from './watering.jpg'
import logo5 from './saga.jpg'
import Float from './floatbut'
import TekidoCard from './tekidocard'
import {Link} from 'react-router-dom'
import './cns.css'
import './cnt.css'

const Content6 = () => {
    return ( 
        <>
    <div className="button">
        <div className="multi-button text-[15px]">
        <button><Link to={'/tekido'}>SEMUA PRODUCT</Link> </button>
        <button><Link to={'/tekido1'}>IOT ALAT PERAGA</Link></button>
        <button><Link to={'/tekido2'}>IOT WORKSHOP KIT</Link></button>
        <button> <Link to={'/tekido3'}>IOT STATER KIT</Link></button>
        </div>
      </div>

<div className='animate__animated animate__bounceInUp flex flex-col items-center'>
<div className="tugas mt-7">
<TekidoCard judul="ENVIROMENTAL SENSOR " kategori="IOT WORKSHOP KIT" caption="IoT Kit - Enviromental Sensor 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-5" link1={<a href="https://www.tokopedia.com/lskkstore/smart-envi-sensor-suhu-ruangan-alat-praktek-sekolah?extParam=whid%3D8931991" className='' >Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009" target='_blank'>Blibli</a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3529660-iot-kit--enviromental-sensor' >Telkom</a>}/> 
<TekidoCard judul="HOME AUTOMATION" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Home Automation 4.0" harga="Rp 2.377.897" foto="w-full rounded-l-lg box box-9" link1={<a href='https://www.tokopedia.com/lskkstore/smart-home-otomasi-stecker-lampu-terminal-alat-praktek-sekolah?extParam=whid%3D8931991' className=' '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/iot-kit-home-automation-4-0/SLSK-0003-00018" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
   </div>
   <div className='tugas mt-7'>
   <TekidoCard judul="SMART WATERING" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Smart Watering 4.0" harga="Rp 1.752.135" foto="w-full rounded-l-lg box box-10" link1={<a href='https://www.tokopedia.com/lskkstore/smart-watering-sensor-kelembaban-tanah-alat-praktek-smk?extParam=whid%3D8931991' className=' '> Tokopedia</a>} link2={<a href='https://siplah.blibli.com/product/iot-kit-smart-watering-4-0/SLSK-0003-00010'>Blibli </a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3535271-iot-kit--smart-watering' className=''>Telkom</a>}/>
   <TekidoCard judul="SMARTCARD SAGA" kategori="IOT WORKSHOP KIT" caption=" IoT Kit - Smartcard Saga 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-11" link1={<a href="https://www.tokopedia.com/lskkstore/smart-absensi-sensor-rfid-alat-absensi?extParam=whid%3D8931991" className=''> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/iot-kit-smartcard-saga-4-0/SLSK-0003-00023">Blibli </a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3635358-iot-kit--smart-saga-rfid' className=''>Telkom</a>}/>
   </div>
   <div className='tugas mt-7'>
   <TekidoCard judul="Center Of Grafity - Timbangan Digital " kategori="IOT WORKSHOP KIT" caption=" berfungsi sebagai alat pendeteksi keberadaan atau status suatu objek." harga="Rp1.750.000" foto="w-full rounded-l-lg box box-16" link1={<a href='https://www.tokopedia.com/lskkstore/center-of-grafity-timbangan-digital-alat-praktek-smk?extParam=whid%3D8931991'target='_blank'> Tokopedia</a>} link2={<a className='cursor-no-drop' >Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
   <TekidoCard judul="Robotic Flex Sensor - Sensor Gerak" kategori="IOT WORKSHOP KIT" caption="alat ini memberikan pemahaman awal untuk memahami bahwa terdapat sensor yang dapat mendeteksi perubahan bentuk." harga="Rp1.650.000" foto="w-full rounded-l-lg box box-17" link1={<a href='https://www.tokopedia.com/lskkstore/robotic-flex-sensor-sensor-gerak-alat-praktek-smk?extParam=whid%3D8931991' target='_blank'> Tokopedia</a>} link2={<a className='cursor-no-drop'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        </div>
    
        </div>
          
      <Float/>
      </>
     );
}
 
export default Content6;