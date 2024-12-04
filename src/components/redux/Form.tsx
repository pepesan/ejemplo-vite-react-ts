// Paso 7: Componente de Formulario (Funcional)
import React, { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addArticle, clearArticle, MisProps } from "./action";

// Función que mapea el dispatch a props
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addArticle: (article: string) => dispatch(addArticle(article)),
    clearArticle: () => dispatch(clearArticle()),
  };
}

// Componente funcional conectado
const ConnectedForm: React.FC<MisProps> = (props) => {
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
