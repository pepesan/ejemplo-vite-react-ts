import './App.css'
import EstadoComponente from "./components/estados/EstadoComponente.tsx";
import EstadoSencillo from "./components/estados/EstadoSencillo.tsx";

function App() {

  return (
    <>
      <div className="card">
          <EstadoComponente/>
          <EstadoSencillo/>
      </div>
    </>
  )
}

export default App
