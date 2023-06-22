import { FaFacebookSquare,FaYoutubeSquare } from "react-icons/fa";
import foto1 from './tokped.png'
import foto2 from './bli.jpg'
import foto3 from './siplah.png'



const Footer = () => {
    return ( 
        <div className="mt-16">
       <footer className='flex lg:flex-row sm:flex-col p-[20px] bg-gradient-to-r from-[#274685] to-[#3db3c5] text-white py-28 justify-around'>
        <div className="ml-7">
            <h1 className=" text-white text-2xl font-semibold">Tautan berguna</h1>
            <ul className="leading-9">
                <li><a href="/home"><span className="mr-1 text-blue-500 font-medium">&gt;</span>Beranda</a></li>
                <li><a href="/about"><span className="mr-1 text-blue-500 font-medium">&gt;</span>Tentang Kami</a></li>
                <li><a href="/layanan"><span className="mr-1 text-blue-500 font-medium">&gt;</span>Layanan</a></li>
                <li><a href="/tekido"><span className="mr-1 text-blue-500 font-medium">&gt;</span>Product</a></li>
                <li><a href="/contak"><span className="mr-1 text-blue-500 font-medium">&gt;</span>Kontak Kami</a></li>
            </ul>
        </div>
        <div className="w-[500px] space-y-3 sm:py-20 lg:py-0">
            <h1 className=" text-white text-2xl font-semibold">Kantor utama</h1>
            <p className="sm:w-96 lg:w-full">Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263<br/>Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
            <p>Nomer Telfon (Kantor Utama) : (022) 7351 6650</p>
            <p>Email: pt.lskk@gmail.com</p>
        </div>
        <div className="lg:w-[500px] sm:w-96">
            <h1 className=" text-white text-2xl font-semibold sm:mb-3 lg:mb-2">Workshop</h1>
            <p>Jl. Punclut No. 516 Ciumbeuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat, 40142</p>
            <p><strong>Nomer Telfon (Workshop)</strong> : (022) 7302571</p>
            
            <div className="flex flex-row gap-2 my-2 ">
               <FaFacebookSquare className="w-[30px] h-[30px] hover:text-slate-500"/>
               <FaYoutubeSquare  className="w-[30px] h-[30px] hover:text-slate-500 " />
            </div>
           
            <p>Available at : </p>
            <div className="flex flex-row gap-2 items-center">
            <a href="https://www.tokopedia.com/lskkstore/etalase/iot-workshop-kit"><img src={foto1}  className="w-16 h-16 "/></a> 
            <a href="https://siplah.blibli.com/merchant-detail/SLSK-0003?itemPerPage=40&page=0&merchantId=SLSK-0003"><img src={foto2} className="w-12 h-12"/></a>
            <a href="https://siplahtelkom.com/store/187296-lskk-store"><img src={foto3} className="w-12 h-12"/></a>
            </div>
        </div>
        </footer>

<div className="bg-gradient-to-r from-[#274685] to-[#3db3c5] text-white border ">
<p className="mx-10 my-5 font-semibold">© Copyright PT. LSKK. All Rights Reserved</p>

</div>
</div>
     );
}
 
export default Footer;