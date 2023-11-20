import Picture from '../components/molecules/Picture';
import Navbar from '../components/organisms/Navbar';
import LandingPagePicture from '../assets/landing.png'
import LandingDesc from '../components/molecules/LandingDesc';

function LandingPage() {
    return(
        <>
            <Navbar index={0}/>
            <div className='w-full flex justify-center'>
                <div className='w-[85%] h-[80vh] py-3 flex gap-5 items-center'>
                    <div className='flex-[4]'>
                        <LandingDesc/>
                    </div>
                    <div className='flex-[3]'>
                        <Picture src={LandingPagePicture} alt="Landing Page"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;