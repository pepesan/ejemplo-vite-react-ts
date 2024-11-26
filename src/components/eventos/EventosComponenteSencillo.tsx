import React, {Component, MouseEvent} from 'react';


class  EventosComponenteSencillo extends Component<never, never>{

    constructor(props: Readonly<never>){
        super(props);
        //console.log(this.state);
        //asociación de los métodos a atributos
        this.pulsame = this.pulsame.bind(this);
    }
    render(): React.ReactElement{
        return (
            <div id="EventosComponente">
                <h2>Eventos Componente</h2>
                <button onClick={this.pulsame}>Pulsame</button>
            </div>

        )
    }
    /*
        Funcion de manejo de evento
     */
    pulsame(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        // console.log(event.target);
        console.log("Se ha hecho clic en el botón");
    }
}

export default EventosComponenteSencillo;
