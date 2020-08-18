//import './lib/editItem.css'

export const EditItem = () => {
// Este es el HTML despue ddel <Body> 
let views = 
`<header class='header'>
<a href="#/home"><img class='imagenP' src=./Imagenes/logoP.svg alt="home"></a>
</header>
<nav class='nav'>
<img class='botonBarra' src=./Imagenes/Arrow.svg>
<a href="#/home"> <img class='botonBarra' src="./Imagenes/home.svg"></a>
<a href="#/profile"> <img class='botonBarra' src="Imagenes/inicio.svg"></a>
</nav>
<main class='contenedor>'>
<section class="grid">
  <section class = 'objetoE'>
  <div class='botonesE'>
  <img src="./Imagenes/pruebaImagen.jpg" class='imagenObjetoE'>
  </div>
  <div class='botonesE'>
  <img src="./Imagenes/Garbage.svg" class="botonBasurero">
  <img src="./Imagenes/Pencil.svg" class="botonEditar">
  </div>
  <p class='editarNombreObjeto'> Nombre del Objeto </p>
  <p class='editarDescripcionObjeto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ad, commodi maxime sit culpa ex similique exercitationem, nobis quasi odit debitis accusamus vel temporibus aliquam possimus fugit, nam veritatis ea?  </p>
  </section>
  <section class="agregarMensaje">
  <input type="text" class='editarComentario' placeholder="Agregar un comentario"> 
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