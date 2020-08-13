// import './lib/newItem.css'

export const NewItem = () => {
    // Este es el HTML despue ddel <Body> 
    let views =
`<header class='header'>
<a href="/"><img class='imagenP' src=./Imagenes/logoP.svg alt="home"></a>
</header>
<nav class='nav'>
<img class='botonBarra' src=./Imagenes/Arrow.svg>
<img class='botonBarra' src="./Imagenes/home.svg">
<img class='botonBarra' src="Imagenes/inicio.svg">
</nav>
<main class='contenedor>'>
<section class="grid">

    <div class='titleNewItem'>Nuevo Item</div>
    <img src="./Imagenes/camara.svg" class='botonCamara' alt="">
    <input type="text" class='itemName' placeholder="Nombre"> 
    <input type="text" class='itemDescription' placeholder="Descripción"> 

    <div class ='botonCrear'> Crear </div>

</section>

</main>`
// esto es antes del <footer>
;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement

}