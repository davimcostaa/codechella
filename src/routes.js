import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiencia from "./pages/Experiencia/Experiencia";
import Inicio from "./pages/Inicio/Inicio";

function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            
            <Route index element={<Inicio />} />
            <Route path="experiencia" element={<Experiencia />} />
   
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;