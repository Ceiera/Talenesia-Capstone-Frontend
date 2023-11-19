function FormRegis() {
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-[80%]">
                <p className="font-semibold text-2xl text-[#143B75] mb-2">Daftar Akun Talenesia</p>
                <form className="w-full">
                    <div className="flex flex-col items-start mb-1">
                        <label className="text-sm text-[#143B75] text-medium">Nama Lengkap</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                            type="text"/>

                        <div className="flex justify-center gap-4 mt-1">
                            <div className="flex-[3] flex flex-col justify-center">
                                <label className="text-sm text-[#143B75] text-medium">Username</label>
                                <input
                                    className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                                    type="text"/>
                            </div>

                            <div className="flex-[4] flex flex-col justify-center">
                                <label className="text-sm text-[#143B75] text-medium">Email</label>
                                <input
                                    className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                                    type="email"/>
                            </div>

                        </div>
                        
                        <label className="text-sm text-[#143B75] mt-1 text-medium">Password</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                            type="password"/>

                        <label className="text-sm text-[#143B75] mt-1 text-medium">Konfirmasi Password</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-0.5 text-[#143B75]"
                            type="password"/>
                    </div>
                    <button type="submit" className="w-full rounded-full border border-transparent mt-3 py-2 px-5 bg-teal-600 text-white hover:text-teal-600 hover:bg-white hover:border-teal-600 active:bg-teal-800 active:text-blue-100">Daftar</button>
                </form>
                <p className="text-sm text-[#143B75] mt-3">Sudah Memiliki Akun? <span><a href="/login" className="text-[#22897D] hover:text-blue-300">Masuk</a></span></p>
            </div>
        </div>
    );
}

export default FormRegis;