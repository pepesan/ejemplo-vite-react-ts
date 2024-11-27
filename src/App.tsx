import './App.css'
import ComponenteAlarma from "./components/react-bootstrap/ComponenteAlarma.tsx";
import AccordionComponent from "./components/react-bootstrap/AccordionComponent.tsx";
import CardComponent from "./components/react-bootstrap/CardComponent.tsx";
import DropDownComponent from "./components/react-bootstrap/DropDownComponent.tsx";
import ModalComponent from "./components/react-bootstrap/ModalComponent.tsx";
import NavBarComponent from "./components/react-bootstrap/NavBarComponent.tsx";

function App() {

    return (
    <>
        <NavBarComponent/>
        <ComponenteAlarma/>
        <AccordionComponent/>
        <CardComponent/>
        <DropDownComponent/>
        <ModalComponent/>
    </>
  )
}

export default App
