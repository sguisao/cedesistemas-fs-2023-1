
import { Fragment, useState } from "react";
import { Button } from "./Button";

export const App = () => {    
    //Estructuras de datos
    //const pets = ["Gu","Mina","Jeiko","Max"];
    
    //Hooks -> react versión 16 en adelante para definir un hooks inician por use
    //[variable,set funcion que modifica la variable]
    const [pets,setPets] = useState(["Gu","Mina","Jeiko","Max"]);
    const [inputPet,setInputPet] = useState("");   

    //Eventos
    const onChangeInputPet = (event) => {
        setInputPet(event.target.value);
    }
    
    //Funciones -> inicial on para indicar que es un evento
    const onAddPet = () => {
        //alert('Agregar mascota arreglo')
        const newPet = inputPet;
        //pets.push(newPet);-> error
        setPets([...pets, newPet]);
        setInputPet("");
    }

    return (
        <Fragment>
            <h1>hola react :)</h1>
            <Button name="Enviar"/>
            <br /><br />
            <Button name="Descargar"/>
            <br /><br />
            <input value={inputPet} onChange={onChangeInputPet} type="text" placeholder="Ingresar nombre mascota"></input>
            <Button name="Agregar" onPress={onAddPet} />
            <ul>
               {
                 pets.map(item => <li>{item}</li>)
               }
            </ul>
        </Fragment>
    )
}

//export default App; 
