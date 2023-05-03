import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";

function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            
            <Route index element={<Inicio />} />
   
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;