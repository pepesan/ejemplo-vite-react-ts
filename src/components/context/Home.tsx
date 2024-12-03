
import { useContext } from "react";
import { LoginContext } from "./contexto";
import { DisplayLogin } from "./DisplayLogin";

export const Home = () => {
    // Obtenemos el estado de inicio de sesión del contexto
    const { loggedIn } = useContext(LoginContext);

    return (
        <div className='pageLayout'>
            <div>
                <h3>Home Page</h3>
            </div>

            {/* Renderiza el componente DisplayLogin si el usuario no está logeado */}
            {!loggedIn && <DisplayLogin />}

            <div>
            </div>
        </div>
    );
};