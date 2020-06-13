import React, {Component} from 'react';

class Mycomponent extends Component{

    render(){
            let date = {
                name: 'rodrigo',
                lastName: 'cayoja',
                frames: [' Spring boot', 'React','C#' ],
                age: '24'
            };

            return(
            <React.Fragment>
                <h1> Hola, soy el componente llamado: Mycomponent</h1>
                <h2>Usando react fragmenent</h2> 
                <h3>Datos:</h3>  
                <h4>{'Nombre: ' + date.name}</h4> 
                <h4>{'lastName: ' + date.lastName}</h4> 
                <ol>
                    {
                        date.frames.map((frame,i) => {
                            console.log(frame);
                            return (
                            <li key={i}>{frame}</li>  
                            );
                        })
                    } 
                </ol>
            </React.Fragment>
            );
    }
}
export default Mycomponent;