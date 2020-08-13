//import './lib/editItem.css'

export const EditItem = () => {
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
  <section class = 'objetoE'>
  <div class='botonesE'>
  <img src="./Imagenes/pruebaImagen.jpg" class='imagenObjetoE'>
  </div>
  <div class='botonesE'>
  <img src="./Imagenes/Garbage.svg" class="garbageButton">
  <img src="./Imagenes/Pencil.svg" class="pencilButton">
  </div>
  <p class='itemNameE'> Nombre del Objeto </p>
  <p class='itemDescriptionE'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad, commodi maxime sit culpa ex similique exercitationem, nobis quasi odit debitis accusamus vel temporibus aliquam possimus fugit, nam veritatis ea?  </p>
  </section>
  <section class="addMessageE">
  <input type="text" class='comentarioE' placeholder="Agregar un comentario"> 
  <div class ='botonEnviarCE'> Enviar </div>
  </section>
  <section class="comentariosE">

  </section>
</section>

</main>
` ;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement
}