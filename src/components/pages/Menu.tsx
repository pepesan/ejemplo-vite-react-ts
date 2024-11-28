import {Link} from "react-router";

const Menu = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>|{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/navega">Navega</Link> |{" "}
            <Link to="/listado">Listado</Link> |{" "}
            <Link to="/ciclodevida">Ciclo de Vida</Link> |{" "}
        </nav>
    )
}

export default Menu;