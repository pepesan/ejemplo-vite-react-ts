import { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null); // useRef se usa para mantener una referencia mutable

    const handleFocus = () => {
        // Accede al input directamente usando inputRef
        if (inputRef.current) {
            (inputRef.current as HTMLInputElement).focus(); // Aplica el enfoque al elemento referenciado
        }
    };

    return (
        <div>
            <h1>Ejemplo de useRef</h1>
            <input ref={inputRef} type="text" placeholder="Escribe algo aquí..." />
            <button onClick={handleFocus}>Enfocar Input</button>
        </div>
    );
};

export default FocusInput;
