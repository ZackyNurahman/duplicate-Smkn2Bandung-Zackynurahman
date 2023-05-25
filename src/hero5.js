import wave from './wave.svg'

const Hero5 = () => {
    return ( 
        <div className="bg-gradient-to-r from-[#274685] to-[#3db3c5] h-screen bg-no-repeat bg-cover relative" >
              <img src={wave} alt="" className='absolute z-[10] w-screen bottom-[-5rem]'/>
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex">
            <div className=" animate__animated animate__fadeInUp">
            <h1>Data Contact</h1>
           <p className=" my-6">All Data Contact</p>
            </div>
        </div>
        </div>
     );
}
 
export default Hero5;