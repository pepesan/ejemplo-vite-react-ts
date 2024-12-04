// Paso 7: Componente de Formulario (Funcional)
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import { addArticle, clearArticle } from ".././store/action.ts";
import {MiAccion} from "../store/GlobalState.ts";

// define el interfaz con las props que necesita
interface FormMisProps {
  // acción de añadir artículo
  addArticle: (payload: string) => void
  // acción de borrar todos los artículos
  clearArticle: () => void
}

// Función que mapea el dispatch a props
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // la prop addArticle es mapeada al lanzamiento de una acción con dispatch
    addArticle: (article: string) => dispatch<MiAccion>(addArticle(article)),
    clearArticle: () => dispatch<MiAccion>(clearArticle()),
  };
}

// Componente funcional conectado
const ConnectedForm: React.FC<FormMisProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addArticle(title);
    setTitle("");
  };

  const clearList = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("clear en form");
    setTitle("");
    props.clearArticle();
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleChange} />
        </div>
        <button type="submit">SAVE</button>
        <button onClick={clearList}>Clear List</button>
      </form>
  );
};

// Conexión del componente con Redux
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
