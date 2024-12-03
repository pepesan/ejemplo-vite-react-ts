import { useState } from 'react';

import { LoginContext } from "./contexto";
import { Login } from "./Login";
import { Home } from "./Home";

function MiContenedor() {
    // Define el estado de inicio de sesión
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        // Proporciona el estado de inicio de sesión al contexto
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            {/* Renderiza los componentes Login y Home */}
            <Login />
            <Home />
        </LoginContext.Provider>
    );
}

export default MiContenedor;