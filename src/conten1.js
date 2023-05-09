import logo2 from './logodeal.png'
import 'animate.css';
import {Link} from 'react-router-dom'

const Content1 = () => {
    return (  
        <div className="mx-72 mt-24 my-8  flex gap-40">
            <div className="gap-5 font-sans text-2xl font-bold w-96 text-justify  animate__animated animate__backInLeft animate__delay-1s">
            <h1 className='mb-2'>TENTANG KAMI</h1>
            <div className="text-lg">
            <p>PT. Langgeng Sejahtera Kreasi Komputasi (PT.LSKK) merupakan perusahaan yang berkedudukan di Bandung yang didirikan pada tahun 2016. Berawal dari sebuah grup yang dimulai pada tahun 2008 sebagai subkontraktor Industri Pertahanan dan TI.</p>
            </div>  
            <button class=" my-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <Link to={'/about'}>READ MORE</Link>
            </button>         
            </div>
            <div className="w-6/12 h-96 mx-11 my-11 animate__animated animate__backInRight animate__delay-1s">
                <img src={logo2} />
            </div>
        </div>
    );
}
 
export default Content1;