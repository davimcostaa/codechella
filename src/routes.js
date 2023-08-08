import Mapa from "pages/Mapa/Mapa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiencia from "./pages/Experiencia/Experiencia";
import Inicio from "./pages/Inicio/Inicio";
import ComprarIngresso from "pages/ComprarIngresso/ComprarIngresso";
import { IngressoProvider } from "common/context/Ingresso";
import Ingresso from "pages/Ingresso/Ingresso";
import { TemaProvider } from "common/context/Tema";
import PaginaPadrao from "components/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
        <TemaProvider>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path="experiencia" element={<Experiencia />} />
                    <Route path="mapa" element={<Mapa />} />
                    <Route path="comprar-ingresso"
                        element={
                            <IngressoProvider>
                            <ComprarIngresso />
                            </IngressoProvider>
                        } 
                    />
                    <Route path="ingresso"
                        element={
                            <IngressoProvider>
                            <Ingresso />
                            </IngressoProvider>
                        } 
                    />
                </Route>                    
                </Routes>
        </TemaProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
