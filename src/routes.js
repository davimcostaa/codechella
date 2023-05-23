import Informacoes from "pages/Informacoes/Informacoes";
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
<<<<<<< HEAD
            <Route path="informacoes" element={<Informacoes />}/>
   
=======
            
>>>>>>> 39a69df9b40657273dbe71b968a3861ee5c84397
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;