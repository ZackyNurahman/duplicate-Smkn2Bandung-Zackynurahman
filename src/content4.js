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
import './cns.css'
import'./cnt.css'





const Content4 = () => {



  
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
 


<div className='animate__animated animate__fadeInUp  flex flex-col items-center'>
<div className="tugas mt-7 gap-[2px]">
        <TekidoCard judul="SMART WATERING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System -Smart Watering 4.0" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-2" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-watering-4-0/SLSK-0003-00027"  target='_blank'>Blibli</a>} link3={<a className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="HOME AUTO LAMP" kategori="IOT STATER KIT" caption="Stater Kit - Lamp 4.0  " harga="Rp 920.621" foto="w-full runded-l-lg box box-3"  link1={<a  className='cursor-not-allowed'>Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-lamp-4-0/SLSK-0003-00024" target='_blank'>Blibli</a>} link3={<a className='cursor-not-allowed '>Telkom</a>}/>

      

 
        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="HOME AUTO " kategori="IOT ALAT PERAGA" caption="Stater Kit - Homeauto Pushbutton 4.0 " harga="Rp 750.915" foto="w-full rounded-l-lg box box-4" link1={<a  className='cursor-not-allowed' >Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009" target='_blank'>Blibli</a>} link3={<a  className='cursor-not-allowed'>Telkom</a>}/>
        <TekidoCard judul="ENVIROMENTAL SENSOR " kategori="IOT WORKSHOP KIT" caption="IoT Kit - Enviromental Sensor 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-5" link1={<a href="https://www.tokopedia.com/lskkstore/smart-envi-sensor-suhu-ruangan-alat-praktek-sekolah?extParam=whid%3D8931991" className='' >Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009" target='_blank'>Blibli</a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3529660-iot-kit--enviromental-sensor' >Telkom</a>}/> 

        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="HOME AUTO STECKER" kategori="IOT STATER KIT" caption="Stater Kit - Homeauto Stecker 4.0" harga="Rp 813.491" foto="w-full rounded-l-lg box box-6" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-stecker-4-0/SLSK-0003-00016?itemPerPage=40&page=0&merchantId=SLSK-0003&keyword=stecker" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="SMART PJU" kategori="IOT ALAT PERAGA " caption="ALAT PERAGA Smart System - Smart PJU 4.0 Smart PJU (Penerangan Jalan Umum)" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-7" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-pju-4-0/SLSK-0003-00022" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
  

      </div>

        <div className="tugas mt-7">
        <TekidoCard judul="SMART PARKING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System - Parking System 4.0" harga="Rp 38.171.512" foto="w-full rounded-l-lg box box-8" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-parking-4-0/SLSK-0003-00025" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="HOME AUTOMATION" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Home Automation 4.0" harga="Rp 2.377.897" foto="w-full rounded-l-lg box box-9" link1={<a href='https://www.tokopedia.com/lskkstore/smart-home-otomasi-stecker-lampu-terminal-alat-praktek-sekolah?extParam=whid%3D8931991' className=' '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/iot-kit-home-automation-4-0/SLSK-0003-00018" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>

       </div>

        <div className="tugas mt-7">
        <TekidoCard judul="SMART WATERING" kategori="IOT WORKSHOP KIT" caption="IoT Kit - Smart Watering 4.0" harga="Rp 1.752.135" foto="w-full rounded-l-lg box box-10" link1={<a href='https://www.tokopedia.com/lskkstore/smart-watering-sensor-kelembaban-tanah-alat-praktek-smk?extParam=whid%3D8931991' className=' '> Tokopedia</a>} link2={<a href='https://siplah.blibli.com/product/iot-kit-smart-watering-4-0/SLSK-0003-00010'>Blibli </a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3535271-iot-kit--smart-watering' className=''>Telkom</a>}/>
        <TekidoCard judul="SMARTCARD SAGA" kategori="IOT WORKSHOP KIT" caption=" IoT Kit - Smartcard Saga 4.0" harga="Rp 1.376.677" foto="w-full rounded-l-lg box box-11" link1={<a href="https://www.tokopedia.com/lskkstore/smart-absensi-sensor-rfid-alat-absensi?extParam=whid%3D8931991" className=''> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/iot-kit-smartcard-saga-4-0/SLSK-0003-00023" > Blibli</a>} link3={<a href='https://siplahtelkom.com/product/alat-peraga-sekolah-lainnya/3635358-iot-kit--smart-saga-rfid' className=''>Telkom</a>}/>

        </div>
    
        <div className="tugas mt-7">
        <TekidoCard judul="SOIL MOISTURE" kategori="IOT STATER KIT" caption="Stater Kit - Soil Moisture 4.0" harga="Rp 750.915" foto="w-full rounded-l-lg box box-12" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-soil-moisture-4-0/SLSK-0003-00007" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="WATER FLOW SMART WATERING" kategori="IOT STATER KIT" caption="Stater Kit - Water Flow Smart Watering 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-13" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-water-flow-smart-watering-4-0/SLSK-0003-00021" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>

        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="WATER LEVEL FLOAT" kategori="IOT STATER KIT" caption="Water Level Float 4.0" harga="Rp 938.643" foto="w-full rounded-l-lg box box-14" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-water-level-float-4-0/SLSK-0003-00011" target='_blank'>Blibli</a>} link3={<a className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="HOME AUTO WATER PUMP" kategori="IOT STATER KIT" caption="Stater Kit - Homeauto Water Pump 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-15" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-water-pump-4-0/SLSK-0003-00019" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>

        </div>

        <div className="tugas mt-7">
        <TekidoCard judul="HOME AUTO WATERING RELAY" kategori="IOT STATER KIT" caption="Stater Kit - Smart Watering Relay 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-14" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-smart-watering-relay-4-0/SLSK-0003-00006" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="Center Of Grafity - Timbangan Digital " kategori="IOT WORKSHOP KIT" caption=" berfungsi sebagai alat pendeteksi keberadaan atau status suatu objek." harga="Rp1.750.000" foto="w-full rounded-l-lg box box-16" link1={<a href='https://www.tokopedia.com/lskkstore/center-of-grafity-timbangan-digital-alat-praktek-smk?extParam=whid%3D8931991'target='_blank'> Tokopedia</a>} link2={<a className='cursor-no-drop' >Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        </div>
        <div className="tugas mt-7">
        <TekidoCard judul="Robotic Flex Sensor - Sensor Gerak" kategori="IOT WORKSHOP KIT" caption="alat ini memberikan pemahaman awal untuk memahami bahwa terdapat sensor yang dapat mendeteksi perubahan bentuk." harga="Rp1.650.000" foto="w-full rounded-l-lg box box-17" link1={<a href='https://www.tokopedia.com/lskkstore/robotic-flex-sensor-sensor-gerak-alat-praktek-smk?extParam=whid%3D8931991' target='_blank'> Tokopedia</a>} link2={<a className='cursor-no-drop'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        </div>
        </div>
     
        <Float/>
  
      
      </>
     );

}
 
export default Content4;