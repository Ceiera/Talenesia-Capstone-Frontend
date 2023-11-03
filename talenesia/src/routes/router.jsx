import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login"

function Router() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;