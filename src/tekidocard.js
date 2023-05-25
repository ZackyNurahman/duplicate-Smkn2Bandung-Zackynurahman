import foto1 from './kotak.jpg';

const TekidoCard = ({judul, kategori, caption, harga, foto, link}) => {
 


    return ( 
     <div className='p-[10px] flex flex-col items-center justify-center'>
        <div className="flex flex-row w-[600px] border-[2px] border-gray-400 rounded-lg shadow-lg items-center">
            <div className="w-[50%]" >
                <div className={foto}></div>
            </div>
            <div className="w-[50%] pl-20 space-y-[10px] p-[10px] relative">
            <h1 className='text-lg font-bold'>{judul}</h1>
            <p className='text-[12px]'><span className='bg-slate-500 text-white font-semibold px-[10px] py-[2px] rounded-xl'>{kategori}</span></p>
            <p className='text-[16px]'>{caption}</p>
            <p className='text-[16px] py-[2px]'>{harga}</p>
            <div className='flex flex-row justify-end'>
            <button className="bg-blue-900 mt-6 px-[15px] py-[5px] text-white font-semibold rounded text-lg"><a href={link} target='_blank'>Buy Now</a></button>
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