import LoginForm from '../../components/molecules/LoginForm';

function Login() {
    return (
        // <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
                <LoginForm />
            </div>
        </div>
    )
}


export default Login;
