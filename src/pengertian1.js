import Nav from './nav'
import Hero3 from  './hero3'
import Footer from './footer';
import logo1 from './kotak.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineLine } from "react-icons/ai";
import {Link} from 'react-router-dom'


const Pengertian1 = () => {
    return ( 
        <>
        <Nav />
        <Hero3 />

        <div className="ml-16 justify-center mt-24 my-8  flex gap-40">
            <div className="gap-5 font-sans text-2xl font-bold w-96 text-left animate__animated animate__backInLeft animate__delay-1s">
            <h1 className='mb-2'>Smart Watering</h1>
            <div className="text-lg">
            <p><span className='text-xl font-bold'>Smart Watering</span> adalah prototipe sistem perawatan tanaman secara otomatis, dimana sistem monitoringnya dirancang melalui Web Perancangan prototipe ini dimaksudkan untuk membantu pengontrolan sistem perawatan tanaman berjenis tomat pada tingkat perorangan (personal user).</p>
            </div>  
            <button class=" my-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to={'/tekido'}>Kembali ?</Link>
            </button>         
            </div>
            <div className="w-[30%]  mx-11  animate__animated animate__backInRight animate__delay-1s">
                <img src={logo1} className='w-[100%] h-[98%] ' />
            </div>
        </div>
        <div className="flex justify-center mt-16  ml-3 mr-9 overflow-x-hidden rounded-lg text-xl mb-10  " role="group">
        <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline "><Link to={'/pengertian15'} className='flex '><AiOutlineArrowLeft className='flex my-auto mr-2'/> Back</Link></button>
        <button className="bg-blue-500 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/tekido'}>Menu</Link></button>
        <button className="bg-blue-500 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"><Link to={'/pengertian2'} className='flex'>Next <AiOutlineArrowRight className='flex my-auto ml-2' /></Link></button>
      </div>
        <Footer />
        </>
     );
}
 
export default Pengertian1;