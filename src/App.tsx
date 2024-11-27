import './App.css'
import CondicionalComponent from "./components/vista/CondicionalComponent.tsx";
import ListadoComponent from "./components/vista/ListadoComponent.tsx";
import CicloDeVida from "./components/ciclosdevida/CicloDeVida.tsx";
import MostrarElementoComponent from "./components/vista/MostrarElementoComponent.tsx";



function App() {

    return (
    <>
      <div className="card">
          <CondicionalComponent/>
          <ListadoComponent/>
          <CicloDeVida/>
          <MostrarElementoComponent/>
      </div>
    </>
  )
}

export default App
