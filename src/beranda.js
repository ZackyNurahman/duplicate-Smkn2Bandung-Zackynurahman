import wave from './wave.svg'
import logo1 from './wave1.svg'
import './back.css'


const Beranda = () => {
    return ( 
        
            <div className="background h-screen bg-blue-600 bg-no-repeat bg-cover relative">
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex animate__animated animate__fadeInUp">
            <div className="z-[100]">
            <h1>PT. Langgeng Sejahtera Kreasi Komputasi</h1>
            <button class="my-4 z-[1009999] text-lg bg-transparent hover:bg-white text-white font-semibold hover:text-[#181823] py-2 px-4 border-white border-2 hover:border-transparent rounded">
            Downloads PDF Company Profile PT.LSKK
            </button>
            </div>
            </div>
            </div>

        
     );
}
 
export default Beranda;