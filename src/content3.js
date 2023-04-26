import { HiOutlineComputerDesktop,HiBriefcase,HiChartBar } from "react-icons/hi2";
import './cn.css'

const Content3 = () => {
    return ( 
        <div className="w-full flex justify-center mb-6 gap-6 my-24 animate__animated animate__bounceInLeft  animate__delay-1s">        
        <a className="block rounded-xl border  font-bold p-4 w-[25%] shadow-xl sm:p-6 lg:p-8" >
           <HiOutlineComputerDesktop className="ml-[42%] "  fontSize="3rem" />
           
            <h3 className=" mt-3 text-lg text-center font-bold   sm:text-xl">
            Application Development
            </h3>
           
            <p className="mt-4 text-sm  before:border-blue-800 text-center ">
            Tim pengembangan kami adalah platform spesialis yang tidak takut menemukan solusi terbaik untuk setiap kebutuhan bisnis. 
            </p>
        </a>
        <a className="block rounded-xl border  font-bold p-4 w-[25%] shadow-xl sm:p-6 lg:p-8" >
            < HiBriefcase className="ml-[42%] "   fontSize="3rem"/>
            
            <h3 after className="mt-3 text-lg after:border-blue-700 font-bold text-center sm:text-xl">
            Software and Hardware
            </h3>
           
            <p className="mt-4 text-sm  text-center">
            Merupakan layanan perusahaan untuk menyediakan solusi di bidang pengadaan hardware seperti laptop (notebook & netbook) dengan berbagai merk, PC (Personal Computer), monitor, printer, LCD Projector, mesin absensi (fingerprint, face detector, proximity, dll), dan lain sebagainya.
            </p>
        </a>
        <a className="block rounded-xl border  font-bold p-4 w-[25%] shadow-xl sm:p-6 lg:p-8" >
            <HiChartBar className="ml-[42%] "  fontSize="3rem"/>
          
            <h3 className="mt-3 text-lg font-bold text-center sm:text-xl">
            Business Analytic
            </h3>
         
            <p className="mt-4 text-sm  text-justify ">
            Analisis bisnis mengacu pada keterampilan, teknologi, dan praktik untuk eksplorasi dan penyelidikan berulang yang berkelanjutan dari kinerja bisnis masa lalu untuk mendapatkan wawasan dan mendorong perencanaan bisnis.
            </p>
        </a>
       </div>
     );
}
 
export default Content3;