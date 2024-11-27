import { useState } from 'react';

const CondicionalComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn((prev) => !prev);
    };

    return (
        <div>
            <h1>{isLoggedIn ? 'Bienvenido, Usuario!' : 'Por favor, inicia sesión'}</h1>
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
            </button>
        </div>
    );
};

export default CondicionalComponent;
