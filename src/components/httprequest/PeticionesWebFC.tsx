import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PeticionesWeb.css';
import Partido from "./Partido";
import ShowPartido from "./ShowPartido";


const PeticionesWebFC: React.FC = () => {
    const [partidos, setPartidos] = useState<Partido[]>([]);

    // Función para recargar datos
    const recarga = () => {
        axios
            .get(`https://pactometro.cursosdedesarrollo.com/resultados.json`)
            .then(res => {
                const partidos: Partido[] = res.data;
                console.log(partidos);
                setPartidos(partidos);
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
                {partidos.map((partido: Partido) => (
                    <ShowPartido key={partido.id} partido={partido} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PeticionesWebFC;
