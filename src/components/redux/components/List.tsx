// Paso 6: Componente de Listado (Funcional)
import React from "react";
import { connect } from "react-redux";
import { GlobalState } from ".././store/GlobalState.ts";

// defino el interfaz con las props que necesita este componente
interface ListMisProps {
  articles: string[]
}

// Define la función que Mapea el estado a las props
const mapStateToProps = (state: GlobalState) => {
  return {
    articles: state.articles
  };
};

// Define el componente de manera normal
const ConnectedList: React.FC<ListMisProps> = (props) => {
  return (
      <ul>
        {props.articles.map((el) => (
            <li key={el + "1"}>{el}</li>
        ))}
      </ul>
  );
};

// Conecta el componente con Redux con la función que mapea las props: (estado)->(props)->(componente)->(plantilla)
const List = connect(mapStateToProps)(ConnectedList);

export default List;
