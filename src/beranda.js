import wave from './wave.svg'
import logo1 from './bg.png'


const Beranda = () => {
    return ( 
        
            <div className=" h-screen bg-blue-600 bg-no-repeat bg-cover relative">
                <img src={logo1} alt="" className='absolute left-0 top-0 w-full h-[100%]'/>
                <img src={wave} alt="" className='absolute z-[20] w-screen bottom-[-5rem]'/>
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex animate__animated animate__fadeInUp">
            <div className="z-[10]">
            <h1>PT. Langgeng Sejahtera Kreasi Komputasi</h1>
            <button class="my-5 text-lg bg-transparent hover:bg-white text-white font-semibold hover:text-[#181823] py-2 px-4 border-white border-2 hover:border-transparent rounded">
            Downloads PDF Company Profile PT.LSKK
            </button>
            </div>
            </div>
            </div>

        
     );
}
 
export default Beranda;