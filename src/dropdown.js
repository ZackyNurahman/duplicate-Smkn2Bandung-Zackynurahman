import './nav.css';


const Dropdown = ({open}) => {
    return ( 
        <div className={open?"absolute top-[3rem] w-[200vw] h-screen bg-white  drop-show":"absolute top-[3rem] bg-white drop-hide"}>
            <ul className='flex flex-col items-baseline ml-[4%] gap-0 mt-1'>
                <li><a href='/home' className=' block px-4 text-black py-2 mt-2 text-sm font-semibold bg-gray-300 w-[800%] rounded-lg   md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Beranda</a></li>
                <li><a href='/about' className=' block px-4 text-black py-2 mt-2 text-sm font-semibold   rounded-lg   md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Tentang Kami</a></li>
                <li><a href='/layanan' className=' block px-4 text-black py-2 mt-2 text-sm font-semibold   rounded-lg   md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Layanan</a></li>
                <li><a href='/tekido' className=' block px-4 text-black py-2 mt-2 text-sm font-semibold   rounded-lg   md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Product</a></li>
                <li><a href='/contak' className=' block px-4 text-black py-2 mt-2 text-sm font-semibold   rounded-lg   md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Kontak Kami</a></li>
            </ul>
        </div>
     );
}
 
export default Dropdown;