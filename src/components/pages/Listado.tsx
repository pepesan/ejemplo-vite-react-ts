import React, { useState } from 'react';
import { Link } from "react-router";

const Listado: React.FC = () => {
    const [listado] = useState<string[]>(["Hola", "Adios"]);

    return (
        <div id="Listado">
            <h2>Listado</h2>
            <ul id="list-element">
                {listado.map(item => (
                    <li className="list-item" key={item}>
                        <Link to={{
                            pathname: "/listado/" + item
                        }}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listado;
