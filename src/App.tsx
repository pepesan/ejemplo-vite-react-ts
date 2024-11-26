import './App.css'
import PropiedadesComponente from "./components/props/PropiedadesComponente.tsx";
import SimpleComponent from "./components/props/SimpleComponent.tsx";
import SimplePropFC from "./components/props/SimplePropFC.tsx";
import VariablesLocales from "./components/props/VariablesLocales.tsx";


function App() {

  return (
    <>
      <div className="card">
          <PropiedadesComponente/>
          <PropiedadesComponente age={20} email="pepesan@gmail.com" name="Pepesan"/>
          <SimpleComponent message="Mensaje"/>
          <SimplePropFC/>
          <SimplePropFC mensaje="Mi mensaje"/>
          <VariablesLocales/>
      </div>
    </>
  )
}

export default App
