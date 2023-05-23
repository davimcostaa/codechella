import Informacoes from "pages/Informacoes/Informacoes";
import Mapa from "pages/Mapa/Mapa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiencia from "./pages/Experiencia/Experiencia";
import Inicio from "./pages/Inicio/Inicio";

function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>    
            <Route index element={<Inicio />} />
            <Route path="experiencia" element={<Experiencia />} />
            <Route path="mapa" element={<Mapa />}/>
            <Route path="informacoes" element={<Informacoes />}/>
   
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;