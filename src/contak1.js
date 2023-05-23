import './contact.css'
import Lokasi from './local.png'
import Email from './email.png'
import Phone from './phone.png'
import React, { useEffect, useState } from 'react';
import axios, { Axios } from "axios";
import Swal from "sweetalert2";
import logo2 from './peta.png'
import {Link} from 'react-router-dom'

const Contak1 = () => {

    const refresh = () => window.location.reload(true)
    
    const [inputs, setInputs] = useState({})

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/lskk/user/save', inputs);
    console.log(inputs);
    
    

   

        



}
    return ( 
        <>
        <div className='mb-20 ml-20 '>
        <div className='contact'>
        <div className='contact1'>
        <div className='contact2'>
            <img src={Lokasi} alt=''/>
            <div className='contact3'>
            <h1>Lokasi :</h1>
            <p>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung,Jawa Barat 40263, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40264</p>
            </div>
        </div>
        <div className='contact2'>
            <img src={Email} alt=''/>
            <div className='contact3'>
            <h1>Email :</h1>
            <p>pt.lskk@gmail.com</p>
            </div>
        </div>
        <div className='contact2'>
            <img src={Phone} alt=''/>
            <div className='contact3'>
            <h1>Nomer Telfon :</h1>
            <p>(022) 73516650</p>
            </div>
        </div>
        </div>

        <div className='contact4'>
            <form onSubmit={handleSubmit}>
                
                <div className="flex">
                <input required onChange={handleChange} name='nama_depan' id='input1' type='text' placeholder='Nama Depan'></input>
                <input required onChange={handleChange} name='nama_belakang' className='' id='input4' type='text' placeholder='Nama Belakang'></input>
                </div>
                
                <div className='contact5'>
                <input required onChange={handleChange} name='email' id='input2' type='text' placeholder='Email'></input>
                <div className="mt-6 h-11">
            <label htmlFor="subject" />
            <select required onChange={handleChange} placeholder="Subject line" name="option" id="subject_input" className='w-full border border-black py-2 px-2'>
              <option value='Saya memiliki proposal kerjasama' >Saya memiliki proposal kerjasama</option>
              <option value='Saya ingin berkolaborasi dengan PT LSKK'>Saya ingin berkolaborasi dengan PT LSKK</option>
              <option value='Saya mau bergabung dengan PT LSKK'>Saya mau bergabung dengan PT LSKK</option>
            </select>
          </div>
                <textarea required onChange={handleChange} className='mt-96' name='pesan' id= 'input3' type='text' placeholder='Pesan'></textarea>
                
                </div>
               
                <div className='items-end flex flex-col'>
                <button  onClick={() => window.location.reload(true)} className=" my-3 bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded justify-end flex items-end">
                SEND MESSAGE
                </button> 
                </div>   
            </form>
        </div>
     </div>
     
     <div className='w-[75%] mt-16 zoom '>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6748222718834!2d107.62455901468964!3d-6.9294157949933615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e87f3af10001%3A0x30abc10f9f62e149!2sPT%20LSKK!5e0!3m2!1sid!2sid!4v1678681276789!5m2!1sid!2sid" width={1000} height={250}  style={{border: 0}}  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
     </div>
     </div>
     </>
     );
}
 
export default Contak1;