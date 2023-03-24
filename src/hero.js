import 'animate.css';

const Hero = () => {
    return ( 
        <div className="bg-[url('./wave.svg')] h-screen bg-no-repeat bg-cover" >
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex">
            <div className=" animate__animated animate__fadeInUp">
            <h1>ABOUT US</h1>
           <p className=" my-6">Some things about PT. LSKK</p>
            </div>
        </div>
        </div>
     );
}
 
export default Hero;