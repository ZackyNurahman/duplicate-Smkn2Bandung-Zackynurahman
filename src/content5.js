import logo1 from './kotak.jpg'
import logo2 from './auto.jpg'
import logo6 from './pju.jpg'
import logo7 from './parking.jpg'
import Float from './floatbut'
import TekidoCard from './tekidocard'
import {Link} from 'react-router-dom'
import './cns.css'
import './cnt.css'

const Content5 = () => {
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
<TekidoCard judul="SMART WATERING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System -Smart Watering 4.0" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-2" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-watering-4-0/SLSK-0003-00027"  target='_blank'>Blibli</a>} link3={<a className='cursor-no-drop'>Telkom</a>}/>
<TekidoCard judul="HOME AUTO " kategori="IOT ALAT PERAGA" caption="Stater Kit - Homeauto Pushbutton 4.0 " harga="Rp 750.915" foto="w-full rounded-l-lg box box-4" link1={<a  className='cursor-not-allowed' >Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/stater-kit-homeauto-pushbutton-4-0/SLSK-0003-00009" target='_blank'>Blibli</a>} link3={<a  className='cursor-not-allowed'>Telkom</a>}/>

        </div>
        <div className="tugas mt-7">
        <TekidoCard judul="SMART PJU" kategori="IOT ALAT PERAGA " caption="ALAT PERAGA Smart System - Smart PJU 4.0 Smart PJU (Penerangan Jalan Umum)" harga="Rp 6.883.387" foto="w-full rounded-l-lg box box-7" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-pju-4-0/SLSK-0003-00022" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        <TekidoCard judul="SMART PARKING" kategori="IOT ALAT PERAGA" caption="ALAT PERAGA Smart System - Parking System 4.0" harga="Rp 38.171.512" foto="w-full rounded-l-lg box box-8" link1={<a className='cursor-not-allowed '> Tokopedia</a>} link2={<a href="https://siplah.blibli.com/product/alat-peraga-smart-system-smart-parking-4-0/SLSK-0003-00025" target='_blank'>Blibli</a>} link3={<a  className='cursor-no-drop'>Telkom</a>}/>
        </div>
        </div>


        <Float/>
      </>
     );
}
 
export default Content5;