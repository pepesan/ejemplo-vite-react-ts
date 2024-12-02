import { useState } from "react";
import axios from "axios";

const PostDataComponent = () => {
    const [data, setData] = useState("");
    const [response, setResponse] = useState("");

    const handlePostRequest = async () => {
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: "foo",
                body: data,
                userId: 1,
            });
            setResponse(res.data); // Almacena la respuesta en el estado
            setData("")
        } catch (error) {
            console.error("Error al realizar la llamada POST", error);
            setResponse("Error en la solicitud.");
        }
    };

    return (
        <div>
            <h1>Enviar Datos con Axios</h1>
            <input
                type="text"
                placeholder="Escribe algo..."
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button onClick={handlePostRequest}>Enviar</button>
            <div>
                <h3>Respuesta del Servidor:</h3>
                <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
        </div>
    );
};

export default PostDataComponent;
