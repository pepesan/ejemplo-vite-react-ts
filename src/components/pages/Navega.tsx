import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router";

function Navega () {
    // recupera la función navigate(ruta)
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    function onclick() {
        // realizas la accion
        console.log("navega");
        // haces el salto a la url
        navigate("/");
    }

    function onclickAbout() {
        // console.log("navega");
        navigate("/about");
    }

    return (
        <div>
            <h2>Navegación programática</h2>
            <p>
                <button id="navega-main-button" onClick={onclick}>Navega Inicio</button>
            </p>
            <p>
                <button id="navega-main-button" onClick={onclickAbout}>Navega About</button>
            </p>
        </div>

    )


}

export default Navega;