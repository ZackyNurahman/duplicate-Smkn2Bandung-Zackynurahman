import logo5 from './itb.png'
import logo6 from './pptik.png'
import logo7 from './binari.png'
import logo8 from './id.png'
import './cn.css'




const Mitra = () => {
    return ( 
        <>
        <div className="w-full flex  justify-around mt-48 animate__animated animate__bounceInUp animate__delay-3s">
            <h2 className=" text-center text-3xl border-gray-400 text-gray font-bold h-9 w-44">Mitra kami</h2>
        </div>
        <div className="flex justify-center w-full mb-20 gap-6 mt-10 animate__animated animate__bounceInUp animate__delay-3s">
        <div className="card">
        <div className="content">
          <h2>ITB</h2>
          <p className=''>Institut Teknologi Bandung (disingkat ITB, aksara Sunda: ᮄᮔ᮪ᮞ᮪ᮒᮤᮒᮥᮒ᮪ ᮒᮦᮊ᮪ᮔᮧᮜᮧᮌᮤ ᮘᮔ᮪ᮓᮥᮀ) adalah sebuah perguruan tinggi negeri yang berkedudukan di Kota Bandung. Nama ITB diresmikan pada tanggal 2 Maret 1959.[2] Sejak tanggal 14 Oktober 2013 ITB menjadi Perguruan Tinggi Negeri Badan Hukum (PTN BH) </p>
        </div>
        <img className='gambar' src={logo5}  />
  

        </div>
        <div className="card">
        <div className="content">
          <h2>PPTIK-ITB</h2>
          <p className=''>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. </p>
        </div>
        <img className='gambar' src={logo6}  />
        </div>
      </div>
    
        <div className="flex justify-center w-full mb-40 mt-11 gap-6 mt-10 animate__animated animate__bounceInUp animate__delay-3s">
        <div className="card">
        <div className="content">
          <h2>BINARY</h2>
          <p className=''>Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology.</p>
        </div>
        <img className='gambar' src={logo7}  />
        </div>
     
      <div className="card">
        <div className="content">
          <h2>PPTIK-ID</h2>
          <p className=''>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ID) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. </p>
        </div>
        <img className='gambar' src={logo8}  />
        </div>
        </div>
          
            </>
     );
}
 
export default Mitra;
