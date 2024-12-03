import React, { useState } from 'react';

// Interfaz para representar los datos de un cliente
interface Cliente {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
}

const ClienteForm: React.FC = () => {
    // Estado inicial del cliente
    const [cliente, setCliente] = useState<Cliente>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };

    // Función para enviar los datos del cliente (puedes reemplazarla con tu lógica de envío)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos del cliente:', cliente);
        // Aquí enviarías los datos a un servidor o realizarías otra acción
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={cliente.nombre}
                    onChange={handleChange}
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    name="apellido"
                    value={cliente.apellido}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={cliente.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Teléfono:
                <input
                    type="tel"
                    name="telefono"
                    value={cliente.telefono}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

export default ClienteForm;