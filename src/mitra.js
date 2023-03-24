import logo5 from './itb.png'
import logo6 from './pptik.png'
import logo7 from './binari.png'
import logo8 from './id.png'




const Mitra = () => {
    return ( 
        <>
        <div className="w-full flex  justify-around mt-48 animate__animated animate__bounceInUp animate__delay-3s">
            <h2 className="border text-center text-2xl border-gray-400 text-gray font-bold h-9 w-44">Mitra kami</h2>
        </div>
        <div className="flex justify-center w-full mb-20 gap-6 mt-10 animate__animated animate__bounceInUp animate__delay-3s">
            <div className="border border-gray-400 w-1/3 h-44 flex"> 
                <div className="border-r border-gray-400 h-44 w-auto p-4">
                    <img className="w-[500px] h-32" src={logo5} />
                 </div>
                <div className="p-4 ">
                    <p>Institut Teknologi Bandung (disingkat ITB, aksara Sunda: ᮄᮔ᮪ᮞ᮪ᮒᮤᮒᮥᮒ᮪ ᮒᮦᮊ᮪ᮔᮧᮜᮧᮌᮤ ᮘᮔ᮪ᮓᮥᮀ) adalah sebuah perguruan tinggi negeri yang berkedudukan di Kota Bandung. Nama ITB diresmikan pada tanggal 2 Maret 1959.</p>
                </div>
            </div>
            <div className="border border-gray-400 w-1/3 h-44 flex"> 
                <div className="border-r border-gray-400 h-44 w-auto p-4">
                    <img className="w-[500px] h-32" src={logo6} />
                 </div>
                <div className="p-4">
                    <p>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia.</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center w-full mb-20 gap-6 mt-10 animate__animated animate__bounceInUp animate__delay-3s">
        <div className="border border-gray-400 w-1/3 h-44 flex"> 
                <div className="border-r border-gray-400 h-44 w-auto p-4">
                    <img className="w-[500px] h-32" src={logo7} />
                 </div>
                <div className="p-4">
                    <p>Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology.</p>
                </div>
            </div>
            <div className="border border-gray-400 w-1/3 h-44 flex"> 
                <div className="border-r border-gray-400 h-44 w-auto p-4">
                    <img className="w-[500px] h-32" src={logo8} />
                 </div>
                <div className="p-4">
                    <p>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia.</p>
                </div>
            </div>
        </div>

          
            </>
     );
}
 
export default Mitra;
