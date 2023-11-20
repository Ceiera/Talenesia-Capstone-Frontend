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
import Picture from '../../components/molecules/Picture';
import FormLogin from '../../components/organisms/FormLogin';

function Login () {
  const handleLogin = (email, password) => {
    // Perform login logic here
    alert (`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className='w-[85%] h-[80vh] py-3 flex gap-6 items-center'>
          <div className='flex-1'>
            <Picture src={loginImage} alt="Login Image"/>
          </div>
          <div className='flex-1'>
            <FormLogin/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
