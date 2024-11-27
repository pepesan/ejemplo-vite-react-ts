import './App.css'
import FormularioBasicoComponente from "./components/formularios/FormularioBasicoComponente.tsx";
import FormularioBasicoComponenteCreateRef from "./components/formularios/FormularioBasicoComponenteCreateRef.tsx";
import LoginFormValidationComponente from "./components/formularios/LoginFormValidationComponente.tsx";
import FormularioBasicoFC from "./components/formularios/FormularioBasicoFC.tsx";
import LoginFormValidationFC from "./components/formularios/LoginFormValidationFC.tsx";




function App() {

    return (
    <>
      <div className="card">
        <FormularioBasicoFC/>
        <FormularioBasicoComponente/>
        <FormularioBasicoComponenteCreateRef/>
        <LoginFormValidationComponente/>
          <LoginFormValidationFC/>
      </div>
    </>
  )
}

export default App
