import {Route, Routes} from "react-router";
import {About, Home, NotFound} from "./Pages.tsx";
import Navega from "./Navega.tsx";
import Listado from "./Listado.tsx";
import Detalle from "./Detalle.tsx";
import CicloDeVida from "../ciclosdevida/CicloDeVida.tsx";
import AddFormPage from "./AddFormPage.tsx";
import HookEstadoComponente from "../hooks/HookEstadoComponente.tsx";
import HookEffect from "../hooks/HookEffect.tsx";
import DataFetcher from "../httprequest/DataFetcher.tsx";
import PeticionesWeb from "../httprequest/PeticionesWeb.tsx";
import FocusInput from "../hooks/FocusInput.tsx";
import PeticionesWebFC from "../httprequest/PeticionesWebFC.tsx";
import PostDataComponent from "../httprequest/PostDataComponent.tsx";
import PostFormikComponent from "../httprequest/PostFormikComponent.tsx";
import ExpensiveCalculationComponent from "../hooks/ExpensiveCalculationComponent.tsx";
import MiContenedor from "../context/MiContenedor.tsx";
import ReduxAPP from "../redux/ReduxApp.tsx";

const AppRoutes = () => {
      return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="navega" element={<Navega/>} />
          <Route path="add" element={<AddFormPage/>} />
          <Route path="listado" element={<Listado/>} />
          <Route path="listado/:id" element={<Detalle></Detalle>} />
          <Route path="ciclodevida" element={<CicloDeVida />} />
          <Route path="state" element={<HookEstadoComponente />} />
          <Route path="effect" element={<HookEffect />} />
          <Route path="ref" element={<FocusInput />} />
          <Route path="memo" element={<ExpensiveCalculationComponent />} />
          <Route path="datafetcher" element={<DataFetcher />} />
          <Route path="partidos" element={<PeticionesWeb />} />
          <Route path="partidosfc" element={<PeticionesWebFC />} />
          <Route path="post" element={<PostDataComponent />} />
          <Route path="postformik" element={<PostFormikComponent />} />
          <Route path="contexto" element={<MiContenedor />} />
          <Route path="redux" element={<ReduxAPP />} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}

export default AppRoutes;