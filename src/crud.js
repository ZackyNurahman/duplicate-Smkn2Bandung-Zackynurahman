import axios from "axios";
import { useEffect, useState } from "react";
import {Await, Link} from 'react-router-dom'
import Footer from './footer'
import Hero5 from "./hero5";





export default function Kontakdata() {

    const deletePost = async (key) => {
        axios.delete(`http://localhost:80/api/crud/delete/${key}`);
        getUsers();
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/lskk/users').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });

    }

    const deleteUser =(id) => {
        axios.delete('http://localhost:80/users/${id}/delete').then(function(response){
        console.log(response);
        getUsers();
        });
    }
    
    return (
        <>

        <div className="mt-20 animate__animated animate__zoomInDown animate__delay-1s">
        <div className="md:px-32 py-8 w-full ">
            <h1 className="text-center text-2xl font-bold mb-6">LIST DATA KONTAK</h1>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="border h-12 border-black bg-[#95BDFF] text-white font-bold">
                        <tr>
                        <th className="border border-black">Nama Depan</th>
                        <th className="border border-black">Nama Belakang</th>
                        <th className="border border-black">Email</th>
                        <th className="border border-black">Opsi</th>
                        <th className="border border-black">Pesan</th>
                        </tr>
                    </thead>
                   
                    <tbody className="border h-12 border-black">
                        {users.map((user, key) => 
                            <tr key={key} className="text-center">
                                <td className="border h-12 border-black">{user.nama_depan}</td>
                                <td className="border h-12 border-black">{user.nama_belakang}</td>
                                <td className="border h-12 border-black">{user.email}</td>
                                <td className="border h-12 border-black">{user.option}</td>
                                <td className="border h-12 border-black">{user.pesan}</td>
                                
                            </tr>

                        )}
                    
                    </tbody>
                </table>
            </div>
            </div>
        </div> 
        </>
    )
}