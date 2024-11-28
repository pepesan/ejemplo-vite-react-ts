
import {Link, useParams,useNavigate} from "react-router";

function Detalle() {
        // recoge parámetros de la url
        let params = useParams();
        // permite navegar a una url
        let navigate = useNavigate();

        return (
            <div id="Detalle">
                <Link to="/listado">Listado</Link>
                <button onClick={() => { navigate("/listado"); }}>Ir al listado</button>
                <h2>Detalle: {params.id}</h2>
            </div>
        )
}

export default Detalle;
