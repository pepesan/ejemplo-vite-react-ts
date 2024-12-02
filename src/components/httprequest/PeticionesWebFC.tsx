import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PeticionesWeb.css';
import Partido from "./Partido";
import ShowPartido from "./ShowPartido";

// Tipo de Dato para Post
type CreateUserResponse = {
    name: string;
    job: string;
    id: string;
    createdAt: string;
};

const PeticionesWebFC: React.FC = () => {
    const [persons, setPersons] = useState<Partido[]>([]);

    // Función para recargar datos
    const recarga = () => {
        axios
            .get(`https://pactometro.cursosdedesarrollo.com/resultados.json`)
            .then(res => {
                const persons: Partido[] = res.data;
                console.log(persons);
                setPersons(persons);
            })
            .catch(error => {
                console.log("Manejo del error");
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    };

    // Función para cargar un POST
    const cargaPost = async () => {
        try {
            const { data } = await axios.post<CreateUserResponse>(
                'https://reqres.in/api/users',
                { name: 'John Smith', job: 'manager' },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                },
            );

            console.log(JSON.stringify(data, null, 4));

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    };

    // useEffect para cargar datos al montar el componente
    useEffect(() => {
        recarga();
    }, []); // [] para que solo se ejecute al montar

    return (
        <div id="PeticionesWeb">
            <button onClick={recarga}>Recarga</button>
            <table className="table table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Diputados</th>
                    <th scope="col">Logotipo</th>
                </tr>
                </thead>
                <tbody>
                {persons.map((partido: Partido) => (
                    <ShowPartido key={partido.id} partido={partido} />
                ))}
                </tbody>
            </table>
            <button onClick={cargaPost}>Carga Post</button>
        </div>
    );
};

export default PeticionesWebFC;
