import wave from './wave.svg'

const Beranda = () => {
    return ( 
        
            <div className="bg-gradient-to-r from-[#274685] to-[#3db3c5] h-screen  bg-no-repeat bg-cover relative">
                <img src={wave} alt="" className='absolute z-[10] w-screen bottom-[-5rem]'/>
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex ">
            <div className="">
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