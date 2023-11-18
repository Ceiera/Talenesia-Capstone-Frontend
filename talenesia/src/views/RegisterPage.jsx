import Navbar from "../components/organisms/Navbar";
import Picture from '../components/molecules/Picture';
import RegisterImage from '../assets/register.png'
import FormRegis from "../components/organisms/FormRegis";

function Register() {
    return(
        <div>
            <Navbar/>
            <div className="w-full flex justify-center">
                <div className='w-[85%] h-[80vh] py-3 flex gap-6 items-center'>
                    <div className='flex-[3]'>
                        <FormRegis/>
                    </div>
                    <div className='flex-[4]'>
                        <Picture src={RegisterImage} alt="register Image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;