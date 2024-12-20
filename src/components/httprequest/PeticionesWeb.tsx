import {Component} from 'react';
import axios from 'axios';
import './PeticionesWeb.css';
import Partido from "./Partido";
import ShowPartido from "./ShowPartido";

// Tipo de Dato para Post
type CreateUserResponse = {
    name: string;
    job: string;
    id: string;
    createdAt: string;
};

interface IState {
    persons: Partido [];
}

class  PeticionesWeb extends Component<never,IState>{
    state = {
        persons: []
    };

    componentDidMount() {
        this.recarga();
    }

    render() {
        return (
            <div id="PeticionesWeb">
                <button onClick={this.recarga}>Recarga</button>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Diputados</th>
                        <th scope="col">Logotipo</th>
                    </tr>
                    </thead>
                    { this.state.persons.map((partido: Partido) =>{
                            return (
                                <ShowPartido partido={partido}/>
                            )
                        }
                    )
                    }
                </table>
            </div>
        )
    }
    // necesitamos definirlo de esta manera para que no falle
    recarga = () =>{
        axios.get(`https://pactometro.cursosdedesarrollo.com/resultados.json`)
            .then(res => {
                const persons: Partido[] = res.data;
                console.log(persons);
                this.setState({ persons });
            })
            .catch(error =>{
                console.log("Manejo del error");
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }


}

export default PeticionesWeb;
