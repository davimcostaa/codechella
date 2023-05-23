import Mapa from "pages/Mapa/Mapa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiencia from "./pages/Experiencia/Experiencia";
import Inicio from "./pages/Inicio/Inicio";
import ComprarIngresso from "pages/ComprarIngresso/ComprarIngresso";

function AppRoutes() {
    return (
        <BrowserRouter>
          <Routes>    
            <Route index element={<Inicio />} />
            <Route path="experiencia" element={<Experiencia />} />
            <Route path="mapa" element={<Mapa />}/>
            <Route path="comprar-ingresso" element={<ComprarIngresso />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;