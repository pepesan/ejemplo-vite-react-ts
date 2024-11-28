import {useNavigate} from "react-router";




const AddFormPage = () => {

    let navigate = useNavigate();

    function onclick() {
        console.log("guarda o envia datos");
        navigate("/listado");
    }
    return (
        <div>
            <h2>Navegación programática</h2>
            <p>
                <button id="navega-main-button" onClick={onclick}>Save and Return</button>
            </p>
        </div>
    )
}
export default AddFormPage;