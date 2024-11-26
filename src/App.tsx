import './App.css'
import BotonConEvento from "./components/eventos/BotonConEvento.tsx";
import EventosComponente from "./components/eventos/EventosComponente.tsx";
import EventosComponenteSencillo from "./components/eventos/EventosComponenteSencillo.tsx";



function App() {

    return (
    <>
      <div className="card">
          <BotonConEvento/>
          <EventosComponente/>
          <EventosComponenteSencillo/>
      </div>
    </>
  )
}

export default App
