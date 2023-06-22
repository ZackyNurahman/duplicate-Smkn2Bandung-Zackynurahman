import logo2 from './roket.jpg'
import 'animate.css';
import logo3 from './time.png'
import logo4 from './glo.png'

const Content2 = () => {
    return ( 
        <>
        <div className="flex xl:flex-row sm:flex-col gap-9 mb-10 my-40 animate__animated animate__fadeInUp animate__delay-1s ">
            <div className="xl:w-[40%] xl:ml-36 sm:w-[75%] sm:ml-[3rem]">
                <img src={logo2} />
            </div>
            <div className="">
            <h1 className='xl:text-2xl xl:ml-0 leading-9 sm:text-lg ml-7 font-bold '> PT. Langgeng Sejahtera Kreasi Komputasi</h1>
            <p className='xl:w-[600px] xl:ml-0 sm:w-[380px] ml-7 xl:mt-0 sm:mt-2 '>PT. Langgeng Sejahtera Kreasi Komputasi (PT.LSKK) merupakan perusahaan yang berkedudukan di Bandung yang didirikan pada tahun 2016.</p>
            <p className='xl:w-[600px] xl:ml-0  sm:w-[350px] ml-7 text-justify my-3'>Keahliah PT.LSKK dalam bidang Cyber-Physical System (CPS), integration between electromechanical system, advanced instrumentation and Information & Communication Technology yaitu Internet of Things, Big Data Analytic, Pemrosesan Sinyal Digital & Kecerdasan Buatan. Portofolio produk PT.LSKK terdiri dari produk pertahanan dan sipil yang sebagian telah digunakan dan disertifikasi di tingkat nasional</p>
            <p className='xl:w-[600px] xl:ml-0  sm:w-[350px] ml-7 text-justify my-3'>Perusahaan ini didirikan sebagai wahana untuk ikut serta dalam memajukan industri teknologi dalam negeri agar dapat bersaing secara global. PT.LSKK didukung oleh sdm yang berkualitas yang masing-masing memiliki pengalaman beranekaragam didunia industri.</p>
            </div>
        </div>

        <div className='text-center mt-60 font-sans text-3xl font-bold animate__animated animate__zoomIn animate__delay-2s'>
            <h1>VISI DAN MISI</h1>
            </div>
            <div className='flex xl:flex-row sm:flex-col sm:ml-[-1rem] gap-8 justify-center mt-12 '>
            <div className="block xl:max-w-xl xl:ml-0 sm:max-w-sm ml-[8%] p-6 bg-white border animate__animated animate__backInLeft animate__delay-2s hover:border-green-600 border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <img src={logo3} className='h-12 mx-auto'/>
        <h5 className="mt-4 text-2xl text-center font-bold tracking-tight text-gray-900 ">VISI</h5>
        <p className="font-normal mt-4 text-gray-700">Menjadi perusahaan penyedia sistem berbasis teknologi canggih yang dapat diandalka</p>
      </div>
      <div className="block xl:max-w-xl xl:ml-0 sm:max-w-sm ml-[8%] p-6 bg-white border animate__animated animate__backInRight animate__delay-2s hover:border-blue-600 border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <img src={logo4} className='h-12 mx-auto'/>
        <h5 className="mt-4 text-2xl text-center font-bold tracking-tight text-gray-900 ">MISI</h5>
        <p className="font-normal mt-4 text-gray-700 ">1. Memberikan sistem yang cukup baik bagi pengguna untuk berhasil menjalankan misi mereka</p>
        <p className="font-normal mt-4 text-gray-700 ">2. Menjadi wahana bagi penerapan kepakaran di bidang teknik secara professional untuk meningkatkan daya saing global dan kesejahteraan Bangsa Indonesia</p>
      </div>
      </div>
       
    
        </>
     );
}
 
export default Content2;