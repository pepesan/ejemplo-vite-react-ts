import { useContext } from 'react';
import { LoginContext } from "./contexto";
import { DisplayLogin } from "./DisplayLogin";

export const Login = () => {
    // Obtener el estado de inicio de sesión y la función para actualizarlo
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    return (
        <>
            <div className="pageLayout">
                <div>
                    <h3>Login</h3>
                </div>

                {/* Renderizar el componente DisplayLogin si el usuario no está logeado */}
                {!loggedIn && <DisplayLogin />}

                <div>
                    {/* Botón para iniciar sesión o cerrar sesión */}
                    <button onClick={() => setLoggedIn(!loggedIn)}>
                        {loggedIn ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
        </>
    );
};
