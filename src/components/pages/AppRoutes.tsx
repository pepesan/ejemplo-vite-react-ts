import {Route, Routes} from "react-router";
import {About, Home, NotFound} from "./Pages.tsx";
import Navega from "./Navega.tsx";
import Listado from "./Listado.tsx";
import Detalle from "./Detalle.tsx";
import CicloDeVida from "../ciclosdevida/CicloDeVida.tsx";

const AppRoutes = () => {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="navega" element={<Navega/>} />
          <Route path="listado" element={<Listado/>} />
          <Route path="listado/:id" element={<Detalle></Detalle>} />
          <Route path="ciclodevida" element={<CicloDeVida />} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}

export default AppRoutes;