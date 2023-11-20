import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const apiUrl = import.meta.env.VITE_APP_URL + "login/"

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log(data.message);
                alert(data.message);
                navigate('/');
            } else {
                const data = await response.json();
                console.log(data.message);
                alert(data.message);
            }
        } catch (error) {
            alert("error during login", error);
        }
    }

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-[70%]">
                <p className="font-semibold text-2xl text-[#143B75] mb-6">Masuk Akun Talenesia</p>
                <form className="w-full" onSubmit={handleLogin}>
                    <div className="flex flex-col items-start mb-3">
                        <label className="text-sm text-[#143B75] mb-1 text-medium">Email</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-1 text-[#143B75]"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        
                        <label className="text-sm text-[#143B75] mt-3 mb-1 text-medium">Password</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-1 text-[#143B75]"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="w-full rounded-full border border-transparent mt-3 py-2 px-5 bg-teal-600 text-white hover:text-teal-600 hover:bg-white hover:border-teal-600 active:bg-teal-800 active:text-blue-100">Masuk</button>
                </form>
                <p className="text-sm text-[#143B75] mt-3">Belum Memiliki Akun? <span><a href="/register" className="text-[#22897D] hover:text-blue-300">Daftar</a></span></p>
            </div>
        </div>
    )
}

export default FormLogin;