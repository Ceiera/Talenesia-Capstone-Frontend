import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../views/LoginPage/LoginPage"

function Router() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;