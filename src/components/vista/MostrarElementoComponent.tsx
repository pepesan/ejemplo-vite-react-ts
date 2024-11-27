import { useState } from 'react';

const MostrarElementoComponent = () => {
    const [mostrar, setMostrar] = useState(true);

    const toggleMostrar = () => {
        setMostrar((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleMostrar}>
                {mostrar ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
            </button>
            {mostrar && <p>Este es un mensaje condicional.</p>}
        </div>
    );
};

export default MostrarElementoComponent;
