// import './lib/newItem.css'

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
    <div>
    <img src="./Imagenes/camara.svg" class='botonCamara' alt="">
    </div> 
    <input type="text" class='itemName' placeholder="Nombre"> 
    <input type="text" class='itemDescription' placeholder="Descripción"> 

    <a href="#/item"> <div class ='botonCrear'> Crear </div></a>

</section>

</main>`
// esto es antes del <footer>
;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement

}