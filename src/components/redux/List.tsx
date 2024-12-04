// Paso 6: Componente de Listado (Funcional)
import React from "react";
import { connect } from "react-redux";
import { GlobalState } from "./GlobalState";
import { addArticle, clearArticle, MisProps } from "./action";

// Mapea el estado a las props
const mapStateToProps = (state: GlobalState) => {
  return {
    articles: state.articles,
    addArticle: addArticle,
    clearArticle: clearArticle,
  };
};

const ConnectedList: React.FC<MisProps> = (props) => {
  return (
      <ul>
        {props.articles.map((el) => (
            <li key={el + "1"}>{el}</li>
        ))}
      </ul>
  );
};

// Conecta el componente con Redux
const List = connect(mapStateToProps)(ConnectedList);

export default List;
