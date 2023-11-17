// import LoginForm from '../../components/organisms/LoginForm';

// function LoginPage() {
//     return (
//         // <Navbar />
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded shadow-md w-96">
//                 <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
//                 <LoginForm />
//             </div>
//         </div>
//     )
// }

// export default LoginPage;

import LoginForm from '../../components/organisms/LoginForm';
import Navbar from '../../components/organisms/Navbar';
import loginImage from '../../assets/login.png';

function Login () {
  const handleLogin = (email, password) => {
    // Perform login logic here
    alert (`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
        <img
          src={loginImage}
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
        />
        <LoginForm onLogin={handleLogin} />

      </div>
    </div>
  );
}

export default Login;
