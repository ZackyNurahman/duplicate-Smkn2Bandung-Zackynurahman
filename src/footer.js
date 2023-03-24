import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return ( 
        <div className="mt-16">
       <footer className='flex flex-row bg-[#95BDFF] text-white py-28 justify-around'>
        <div className="ml-7">
            <h1 className=" text-blue-500 text-2xl font-semibold">Tautan berguna</h1>
            <ul className="leading-9">
                <li><a href=""><span className="mr-1 text-blue-500 font-medium">&gt;</span>Beranda</a></li>
                <li><a href=""><span className="mr-1 text-blue-500 font-medium">&gt;</span>Tentang kami</a></li>
                <li><a href=""><span className="mr-1 text-blue-500 font-medium">&gt;</span>Layanan</a></li>
                <li><a href=""><span className="mr-1 text-blue-500 font-medium">&gt;</span>Tekido</a></li>
                <li><a href=""><span className="mr-1 text-blue-500 font-medium">&gt;</span>Tekido</a></li>
            </ul>
        </div>
        <div className="w-[500px] space-y-3">
            <h1 className=" text-blue-500 text-2xl font-semibold">Kantor utama</h1>
            <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263<br/>Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
            <p>Nomer Telfon (Kantor Utama) : (022) 7351 6650</p>
            <p>Email: pt.lskk@gmail.com</p>
        </div>
        <div className="w-[500px]">
            <h1 className=" text-blue-500 text-2xl font-semibold">Workshop</h1>
            <p>Jl. Punclut No. 516 Ciumbeuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat, 40142</p>
            <p><strong>Nomer Telfon (Workshop)</strong> : (022) 7302571</p>
            <div className="flex flex-row gap-2 my-2 ">
               <AiFillTwitterCircle fontSize="2rem" className="hover:text-slate-500 " />
               <AiFillInstagram fontSize="2rem" className="hover:text-slate-500 " />
            </div>
        </div>
        </footer>

<div className="bg-[#95BDFF] text-white border ">
<p className="mx-10 my-5 font-semibold">© Copyright PT. LSKK. All Rights Reserved</p>
</div>
</div>
     );
}
 
export default Footer;