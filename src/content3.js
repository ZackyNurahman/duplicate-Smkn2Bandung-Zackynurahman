import { HiOutlineComputerDesktop,HiBriefcase,HiChartBar } from "react-icons/hi2";

const Content3 = () => {
    return ( 
        <div className="w-full flex justify-center gap-6 my-24 animate__animated animate__bounceInLeft  animate__delay-1s">        
        <a className="block rounded-xl border border-gray-800 font-bold bg-[#0E8388] p-4 w-[25%] shadow-xl sm:p-6 lg:p-8" href>
           <HiOutlineComputerDesktop fontSize="3rem" />
            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
            Application Development
            </h3>
            <p className="mt-4 text-sm text-gray-300 text-justify">
            Tim pengembangan kami adalah platform spesialis yang tidak takut menemukan solusi terbaik untuk setiap kebutuhan bisnis. 
            </p>
        </a>
        <a className="block rounded-xl border border-gray-800 font-bold bg-[#0E8388] p-4 w-[25%] shadow-xl sm:p-6 lg:p-8" href>
            < HiBriefcase  fontSize="3rem"/>
            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
            Software and Hardware
            </h3>
            <p className="mt-4 text-sm text-gray-300 text-justify">
            Merupakan layanan perusahaan untuk menyediakan solusi di bidang pengadaan hardware seperti laptop (notebook & netbook) dengan berbagai merk, PC (Personal Computer), monitor, printer, LCD Projector, mesin absensi (fingerprint, face detector, proximity, dll), dan lain sebagainya.
            </p>
        </a>
        <a className="block rounded-xl border border-gray-800 font-bold bg-[#0E8388] p-4 w-[25%] shadow-xl sm:p-6 lg:p-8" href>
            <HiChartBar fontSize="3rem"/>
            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
            Business Analytic
            </h3>
            <p className="mt-4 text-sm text-gray-300 text-justify ">
            Analisis bisnis mengacu pada keterampilan, teknologi, dan praktik untuk eksplorasi dan penyelidikan berulang yang berkelanjutan dari kinerja bisnis masa lalu untuk mendapatkan wawasan dan mendorong perencanaan bisnis.
            </p>
        </a>
        </div>
     );
}
 
export default Content3;