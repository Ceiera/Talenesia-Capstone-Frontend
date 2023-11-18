function FormLogin() {
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-[70%]">
                <p className="font-semibold text-2xl text-[#143B75] mb-6">Masuk Akun Talenesia</p>
                <form className="w-full">
                    <div className="flex flex-col items-start mb-3">
                        <label className="text-sm text-[#143B75] mb-1 text-medium">Email/Username</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-1 text-[#143B75]"
                            type="text"/>
                        
                        <label className="text-sm text-[#143B75] mt-3 mb-1 text-medium">Password</label>
                        <input
                            className="border border-[#143B75] rounded-md w-full px-2 py-1 text-[#143B75]"
                            type="password"/>
                    </div>
                    <button type="submit" className="w-full rounded-full border border-transparent mt-3 py-2 px-5 bg-teal-600 text-white hover:text-teal-600 hover:bg-white hover:border-teal-600 active:bg-teal-800 active:text-blue-100">Masuk</button>
                </form>
                <p className="text-sm text-[#143B75] mt-3">Belum Memiliki Akun? <span><a href="/register" className="text-[#22897D]">Daftar</a></span></p>
            </div>
        </div>
    )
}

export default FormLogin;