// import './lib/newItem.css'

import {db} from "../main.js";

export const NewItem = () => {
    // Este es el HTML despue ddel <Body> 
    let views =
        `<header class='header'>
<a href="/"><img class='imagenP' src=./Imagenes/logoP.svg alt="home"></a>
</header>
<nav class='nav'>
<img class='botonBarra' src=./Imagenes/Arrow.svg>
<a href="#/home"> <img class='botonBarra' src="./Imagenes/home.svg"></a>
<a href="#/profile"> <img class='botonBarra' src="Imagenes/inicio.svg"></a>
</nav>
<main class='contenedor>'>
<section class="grid">

    <div class='titleNewItem'>Nuevo Item</div>
    <form id= 'subirNuevoItem')>
    <div>
    <img src="./Imagenes/camara.svg" class='botonCamara' alt="">
    </div> 
    <input type="text" class='itemName' placeholder="Nombre" id= 'nombreNuevoItem'> 
    <input type="text" class='itemDescription' placeholder="Descripción" id = 'descripcionNuevoItem'> 
    <button type= 'submit' class= 'botonCrear' id = 'enviarNuevoItem'> Crear </button>
    </form>
</section>

</main>`
        // esto es antes del <footer>
        ;
    let divElement = document.createElement('div');
    divElement.innerHTML = views
    return divElement

}

export const nuevoItem = async () => {

    const subirNuevoItem = document.getElementById('subirNuevoItem');
    subirNuevoItem.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreNuevoItem = document.getElementById('nombreNuevoItem').value;
        const descripcionNuevoItem = document.getElementById('descripcionNuevoItem').value;
        //sacar funcion aparte main.js guardar obj 
        db.collection('objetos').doc().set(
            {   
                nombreNuevoItem,
                descripcionNuevoItem
            }
        )
        console.log( nombreNuevoItem, descripcionNuevoItem )
        window.location.hash = "#/item"
    })
}
export const obtenerObjetos = async () => {
    db.collection('objetos')
    .get()
    .then ((snapshot) => {
      console.log (snapshot);
      }) 
    }
