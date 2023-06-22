import wave from './wave.svg'
import logo1 from './wave1.svg'
import './back.css'


const Beranda = () => {
    return ( 
        
            <div className="background h-screen w-screen bg-blue-600 bg-no-repeat bg-cover relative">
        <div className=" xl:py-56 xl:pl-48 sm:pt-36 pl-3  font sm:text-lg lg:text-4xl  text-white font-bold  font-sans flex animate__animated animate__fadeInUp">
            <div className="z-[100] sm:pr-11 xl:text-left sm:text-center ">
            <h1 className='xl:w-[1000px] sm:w-[24rem] text-4xl' >PT. Langgeng Sejahtera Kreasi Komputasi</h1>
            <button class="my-4 z-[1009999] xl:text-lg  bg-transparent hover:bg-white text-white font-semibold hover:text-[#181823] py-2 px-4 border-white border-2 hover:border-transparent rounded sm:w-4/5 text-sm sm:pl-8 lg:w-1/2">
            Downloads PDF Company Profile PT.LSKK
            </button>
            </div>
            </div>
            </div>

        
     );
}
 
export default Beranda;