import React from "react";
import "./App.css";

// COMPONENTS

import Header from "./Components/Header";
import CardProduct from "./Components/CardProduct";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";


// PROPS => SVGStringList, arrays, Booleans, functios, objects, all type of data 


class App extends React.Component {
render() {
    return (
    <div className="App">
        <Header
        title="con varios años de experiencia"
        subtitle="joyeria de alta calidad"
        ></Header>

        <NavBar/>

        <ItemListContainer props="Hola soy un titulo pasado por props"/>
        
        <div div className="CardProduct">
        < CardProduct img="../../src/assets/colgantes1.jpeg"
        name="Aros de diamante"
        description="Aros Swarovski Aurora, plata 925" />
        < CardProduct img="../../src/assets/colgantes2.png"
        name="Aros Argolla Multicolor"
        description="Aros multicolor, Plata 925" />
        < CardProduct img="../../src/assets/colgantes3..png"
        name="Aros Argollita Swarosvski"
        description="Aros Swarovski Aurora, plata 925" />
        < CardProduct img="../../src/assets/colgantes4.png"
        name="Aros cubic y piedra verde"
        description="El verde es color esperanza, Plata 925" />
        </div>
    </div>
    );
}
}

export default App;