import {Link} from "react-router";

const Menu = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>|{" "}
            <Link to="/about">About</Link> |{" "}
        </nav>
    )
}

export default Menu;