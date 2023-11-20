import Navbar from "../components/organisms/Navbar";
import CourseContent from "../components/molecules/CourseContent";

function CoursePage() {
  return(
    <div className="flex flex-col h-screen">
      <Navbar index={1}></Navbar>
      <div className="w-full flex-1 flex justify-center overflow-scroll">
        <div className="w-[85%] py-3 flex">
          <CourseContent></CourseContent>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
