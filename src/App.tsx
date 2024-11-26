import './App.css'
import Jedi from "./components/Jedi.tsx";
import Sith from "./components/Sith.tsx";
import MiComponente from "./components/MiComponente.tsx";
import ConstComponent from "./components/ConstComponent.tsx";

function App() {

  return (
    <>
      <div className="card">
          <Jedi/>
          <Sith/>
          <MiComponente/>
          <ConstComponent/>
      </div>
    </>
  )
}

export default App
