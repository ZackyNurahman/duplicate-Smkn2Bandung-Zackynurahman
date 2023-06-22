import foto1 from './kotak.jpg';

const TekidoCard = ({judul, kategori, caption, harga, foto, link1,link2,link3}) => {
 


    return ( 
     <div className='p-[10px] flex flex-col items-center justify-center'>
        <div className="flex xl:flex-row sm:flex-col xl:w-[600px] sm:w-[400px] border-[2px] border-gray-400 rounded-lg shadow-lg items-center">
            <div className="xl:w-[50%] sm:w-[83%] mr-[66px]" >
                <div className={foto}></div>
            </div>
            <div className="w-[50%] xl:pl-3 xl:ml-0 sm:ml-[-184px]  space-y-[10px] p-[10px] relative">
                    <h1 className='text-lg font-bold'>{judul}</h1>
                    <p className='text-[10px] '><span className=' bg-slate-500 text-white font-semibold px-[10px] xl:text-xs sm:text-[15px]  py-[2px] rounded-xl'>{kategori}</span></p>
                    <p className='text-[16px]'>{caption}</p>
                    <p className='text-[16px] py-[2px]'>{harga}</p>

            <div className='flex flex-row justify-start'>
                <div className="dropdown">
                    <button className="dropbtn flex flex-row ">Buy Now<svg class="w-4 h-4 ml-2 xl:mt-1 sm:mt-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div className="dropdown-content">
                            {link1}
                            {link2}
                            {link3}
                        </div>
                </div>
            </div>
            </div>
        </div> 
        </div>




    //     <div className="section-content">
    //     <div className="content-wrapper">       
    //     <div className={foto}>
    //     <div className="first"> 
    //     </div>

    //    <div className='second '>
    //     <p className='font-bold text-lg'>{judul}</p>
    //     <p className='text-xs'>-{kategori}-</p>
     
    //     <p className='mt-2 '>{caption}</p>
    //     <p className='mt-2 text-[20px] font-semibold'>{harga}</p>
    //     <button className=''>Add Chart</button>
    //     </div>
    //     </div>
    //     </div>
    //     </div>
     );
}
 
export default TekidoCard;