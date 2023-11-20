import TeacherContent from "../components/molecules/TeacherContent";
import Navbar from "../components/organisms/Navbar";

function TeacherPage() {
    return(
        <div className="flex flex-col h-screen">
            <Navbar index={2}></Navbar>
            <div className="w-full flex-1 flex justify-center overflow-scroll">
                <div className="w-[85%] py-3 flex">
                    <TeacherContent></TeacherContent>
                </div>
            </div>
        </div>
    );
}

export default TeacherPage;