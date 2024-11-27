import './App.css'
import CondicionalComponent from "./components/vista/CondicionalComponent.tsx";
import ListadoComponent from "./components/vista/ListadoComponent.tsx";
import CicloDeVida from "./components/ciclosdevida/CicloDeVida.tsx";



function App() {

    return (
    <>
      <div className="card">
          <CondicionalComponent/>
          <ListadoComponent/>
          <CicloDeVida/>
      </div>
    </>
  )
}

export default App
