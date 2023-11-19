import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormRegis() {
    const [userFullName, setNamaLengkap] = useState('');
    const [userRole, setRole] = useState('');
    const [userName, setUsername] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegis = async (event) => {
        event.preventDefault();
        const apiUrl = import.meta.env.VITE_APP_URL + "users/";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userRole, userEmail, userFullName, userName, userPassword }),
            });

            if (response.status === 201) {
                const data = await response.json();
                console.log(data.message)
                alert(data.message);
                navigate('/');
            } else {
                const data = await response.json();
                console.log(data.data)
                alert(data.message);
            }
        } catch (error) {
            console.log(error)
            alert("error during register", error);
        }
    }

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-[80%]">
                <p className="font-semibold text-2xl text-[#143B75] mb-2">Daftar Akun Talenesia</p>
                <form className="w-full" onSubmit={handleRegis}>
                    <div className="flex flex-col items-start mb-1">
                        <label className="text-sm text-[#143B75] text-medium">Nama Lengkap</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                            type="text"
                            value={userFullName}
                            onChange={(e) => setNamaLengkap(e.target.value)}/>

                        <div className="flex justify-center gap-4 mt-1">
                            <div className="flex-[3] flex flex-col justify-center">
                                <label className="text-sm text-[#143B75] text-medium">Role</label>
                                <input
                                    className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                                    type="text"
                                    value={userRole}
                                    onChange={(e) => setRole(e.target.value)}/>
                            </div>

                            <div className="flex-[4] flex flex-col justify-center">
                                <label className="text-sm text-[#143B75] text-medium">Username</label>
                                <input
                                    className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>

                        </div>
                        
                        <label className="text-sm text-[#143B75] mt-1 text-medium">Email</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                            type="email"
                            value={userEmail}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <label className="text-sm text-[#143B75] mt-1 text-medium">Password</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                            type="password"
                            value={userPassword}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full rounded-full border border-transparent mt-3 py-2 px-5 bg-teal-600 text-white hover:text-teal-600 hover:bg-white hover:border-teal-600 active:bg-teal-800 active:text-blue-100">Daftar</button>
                </form>
                <p className="text-sm text-[#143B75] mt-3">Sudah Memiliki Akun? <span><a href="/login" className="text-[#22897D] hover:text-blue-300">Masuk</a></span></p>
            </div>
        </div>
    );
}

export default FormRegis;