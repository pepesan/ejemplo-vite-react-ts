import { useState } from 'react';

import { LoginContext } from "./contexto";
import { Login } from "./Login";
import { Home } from "./Home";
import {Settings} from "./Settings.tsx";

function MiContenedor() {
    // Define el estado de inicio de sesión
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        // Proporciona el estado de inicio de sesión al contexto
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            {/* Renderiza los componentes Login y Home */}
            <Login />
            <Home />
            <Settings/>
        </LoginContext.Provider>
    );
}

export default MiContenedor;