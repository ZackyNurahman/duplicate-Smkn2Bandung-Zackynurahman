import wave from './wave.svg'
import logo1 from './bg.png'

const Hero3 = () => {
    return ( 
        <div className=" h-screen bg-blue-600 bg-no-repeat bg-cover relative">
        <img src={logo1} alt="" className='absolute left-0 top-0 w-full h-[100%]'/>
              <img src={wave} alt="" className='absolute z-[10] w-screen bottom-[-2rem]'/>
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex">
            <div className=" animate__animated animate__fadeInUp text-5xl">
            <h1>Tekido</h1>
            </div>
        </div>
        </div>
     );
}
 
export default Hero3;