import React, { useState, FormEvent, useRef } from 'react';

const FormularioBasicoFC: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if (inputRef.current) {
            const name = inputRef.current.value.trim();
            console.log(name);
            setValue(name);
        }
    };

    const handleSubmit = (event: FormEvent) => {
        console.log('A name was submitted: ' + value);
        event.preventDefault();
    };

    return (
        <div id="FormularioComponente">
            <h2>Formulario Básico FC</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={value}
                        ref={inputRef}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <label>{value}</label>
        </div>
    );
};

export default FormularioBasicoFC;
