import 'animate.css';

const Hero = () => {
    return ( 
        <div className="bg-[url('./wa.svg')] h-screen bg-no-repeat bg-cover" >
        <div className=" py-60 px-48 font text-4xl text-white font-bold  font-sans flex">
            <div className=" animate__animated animate__fadeInUp">
            <h1>TENTANG KAMI</h1>
           <p className=" my-6">Beberapa hal mengenai PT. LSKK</p>
            </div>
        </div>
        </div>
     );
}
 
export default Hero;