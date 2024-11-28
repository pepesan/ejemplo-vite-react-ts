import './App.css'
import AppRoutes from "./components/pages/AppRoutes.tsx";
import Menu from "./components/pages/Menu.tsx";
import Footer from "./components/pages/Footer.tsx";

function App() {

    return (
        <>
            <Menu/>
            <AppRoutes/>
            <Footer/>
        </>
    )
}

export default App
