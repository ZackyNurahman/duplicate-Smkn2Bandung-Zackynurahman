
import logo1 from './home.png'
import logo2 from './stecker.png'
import logo3 from './soil.png'
import logo4 from './water.png'
import logo5 from './float.png'
import logo6 from './pump.png'
import logo7 from './relay.png'
import Float from './floatbut'
import TekidoCard from './tekidocard'
import {Link} from 'react-router-dom'
import './cns.css'
import './cnt.css'

const Content7 = () => {
    return ( 
        <>
   <div className="button sm:w-[95%]">
        <div className="multi-button text-[15px]">
        <button><Link to={'/tekido'}>SEMUA PRODUCT</Link> </button>
        <button><Link to={'/tekido1'}>IOT ALAT PERAGA</Link></button>
        <button><Link to={'/tekido2'}>IOT WORKSHOP KIT</Link></button>
        <button> <Link to={'/tekido3'}>IOT STATER KIT</Link></button>
        </div>
      </div>

<div className='animate__animated animate__bounceInUp flex xl:flex-row sm:flex-col items-center'>
        <div className="tugas mt-7  ">
        <TekidoCard judul="HOME AUTO LAMP" kategori="IOT STATER KIT" caption="Stater Kit - Lamp 4.0  " harga="Rp 920.621" foto="w-full runded-l-lg box box-3"  link1={<a  className='cursor-not-allowed'>Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-lamp-4-0/SLSK-0003-00024" target='_blank'>Blibli</a>} link3={<a className='cursor-not-allowed '>Telkom</a>}/>
        <TekidoCard judul="HOME AUTO STECKER" kategori="IOT STATER KIT" caption="Stater Kit - Homeauto Stecker 4.0" harga="Rp 813.491" foto="w-full rounded-l-lg box box-6" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-stecker-4-0/SLSK-0003-00016?itemPerPage=40&page=0&merchantId=SLSK-0003&keyword=stecker" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
</div>
        <div className="tugas mt-7 ">
        <TekidoCard judul="SOIL MOISTURE" kategori="IOT STATER KIT" caption="Stater Kit - Soil Moisture 4.0" harga="Rp 750.915" foto="w-full rounded-l-lg box box-12" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-soil-moisture-4-0/SLSK-0003-00007" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="WATER FLOW SMART WATERING" kategori="IOT STATER KIT" caption="Stater Kit - Water Flow Smart Watering 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-13" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-water-flow-smart-watering-4-0/SLSK-0003-00021" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
</div>
       <div className="tugas mt-7 ">
       <TekidoCard judul="WATER LEVEL FLOAT" kategori="IOT STATER KIT" caption="Water Level Float 4.0" harga="Rp 938.643" foto="w-full rounded-l-lg box box-14" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-water-level-float-4-0/SLSK-0003-00011" target='_blank'>Blibli</a>} link3={<a className='cursor-no-drop'>Telkom</a>}/>
       <TekidoCard judul="HOME AUTO WATER PUMP" kategori="IOT STATER KIT" caption="Stater Kit - Homeauto Water Pump 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-15" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-water-pump-4-0/SLSK-0003-00019" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        </div>
        <div className="tugas mt-7 ">
        <TekidoCard judul="HOME AUTO WATERING RELAY" kategori="IOT STATER KIT" caption="Stater Kit - Smart Watering Relay 4.0" harga="Rp 876.067" foto="w-full rounded-l-lg box box-14" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-smart-watering-relay-4-0/SLSK-0003-00006" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
          </div>
</div>
        <Float/>
       </>
     );
}
 
export default Content7;