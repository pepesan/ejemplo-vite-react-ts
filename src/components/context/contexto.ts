import { createContext } from "react";

// Creamos un contexto de React para gestionar el estado de inicio de sesión
export const LoginContext = createContext(
    // Valor por defecto del contexto:
    {
        // Indica si el usuario está actualmente logeado
        loggedIn: false,
        // Función para actualizar el estado de inicio de sesión
        setLoggedIn: (loggedIn: boolean) => {}
    }
);