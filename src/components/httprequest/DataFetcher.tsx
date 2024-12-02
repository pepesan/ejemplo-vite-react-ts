import { useState, useEffect } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulación de llamada a una API
        const fetchData = async () => {
            try {
                // setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup en el useEffect (opcional, por ejemplo, para cancelar una solicitud)
        return () => {
            console.log('Componente desmontado o efecto limpiado');
        };
    }, []); // El array vacío significa que solo se ejecuta al montar el componente.

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Datos obtenidos:</h1>
            <ul>
                {data.slice(0, 10).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
