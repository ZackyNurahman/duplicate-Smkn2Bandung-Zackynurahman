import logo2 from './roket.jpg'
import 'animate.css';
import logo3 from './visi.png'
import logo4 from './misi.png'

const Content2 = () => {
    return ( 
        <>
        <div className="flex flex-row gap-9 mb-10 my-40 animate__animated animate__fadeInUp animate__delay-1s ">
            <div className="w-[40%]  ml-36">
                <img src={logo2} />
            </div>

            <div className="">
            <h1 className='text-2xl leading-9 font-bold'> PT. Langgeng Sejahtera Kreasi Komputasi</h1>
            <p className='w-[600px] '>PT. Langgeng Sejahtera Kreasi Komputasi (PT.LSKK) merupakan perusahaan yang berkedudukan di Bandung yang didirikan pada tahun 2016.</p>
            <p className='w-[600px] text-justify my-3'>Keahliah PT.LSKK dalam bidang Cyber-Physical System (CPS), integration between electromechanical system, advanced instrumentation and Information & Communication Technology yaitu Internet of Things, Big Data Analytic, Pemrosesan Sinyal Digital & Kecerdasan Buatan. Portofolio produk PT.LSKK terdiri dari produk pertahanan dan sipil yang sebagian telah digunakan dan disertifikasi di tingkat nasional</p>
            <p className='w-[600px] text-justify my-3'>Perusahaan ini didirikan sebagai wahana untuk ikut serta dalam memajukan industri teknologi dalam negeri agar dapat bersaing secara global. PT.LSKK didukung oleh sdm yang berkualitas yang masing-masing memiliki pengalaman beranekaragam didunia industri.</p>
            </div>
        </div>

        <div className='text-center mr-4 mt-72 font-sans text-3xl font-bold animate__animated animate__bounceInDown animate__delay-2s'>
            <h1>VISI AND MISI</h1>
            </div>
        <div className="container mx-auto px-20 ">
        <div style={{backgroundColor: 'rgb(248, 250, 255)'}}>
          <div className="md:mt-12 flex  flex-wrap blue-box relative text-lg pb-4" style={{cursor: 'auto'}}>
            <blockquote className="w-1/2 sm:w-1/2 p-6 hover:border border-black shadow-xl animate__animated animate__backInLeft animate__delay-2s" style={{cursor: 'auto'}}>
              <div className="mb-4"> 
                <img src={logo3} alt="Company Logo" />
              </div>
              <p className="my-5"> 
                <span className="text-primary-900">1.</span>Menjadi perusahaan penyedia sistem berbasis teknologi canggih yang dapat diandalkan.
              </p>
              <div className="flex items-center"> 
                <div className="flex flex-col items-start"> 
                </div>
              </div>
            </blockquote>
            <blockquote className="w-1/2 m:w-1/2 p-6 hover:border border-black shadow-xl animate__animated animate__backInRight animate__delay-2s " style={{cursor: 'auto'}}>
              <div className="mb-4 mt-1 ">  
              <img src={logo4} className="h-[218px] w-[100%]" alt="Company Logo" />
              </div>
              <p className="mb-4"> 
                <span className="text-primary-900">1.</span>Memberikan sistem yang cukup baik bagi pengguna untuk berhasil menjalankan misi mereka.</p>
                <span className="text-primary-900 text-justify">2.</span>Menjadi wahana bagi penerapan kepakaran di bidang teknik secara professional untuk meningkatkan daya saing global dan kesejahteraan Bangsa Indonesia.
             
              <div className="flex items-center"> 
                <div className="flex flex-col items-start">
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default Content2;