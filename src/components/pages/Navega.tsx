import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router";

function Navega () {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();

    function onclick() {
        console.log("navega");
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