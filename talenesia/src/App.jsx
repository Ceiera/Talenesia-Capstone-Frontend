import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Login from './views/LoginPage/LoginPage';
import Register from './views/RegisterPage';
import LandingPage from './views/LandingPage';
import CoursePage from './views/CoursePage';
import TeacherPage from './views/TeacherPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/course' element={<CoursePage/>}></Route>
        <Route path='/teacher' element={<TeacherPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
