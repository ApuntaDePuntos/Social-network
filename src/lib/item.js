
import {entrarItem} from '../FireBaseFunciones/TraerInformacion.js';


export const Item = async() => {

   let post = await entrarItem()

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
    ${post}
  <section class="addMessage">
  <input type="text" class='comentario' placeholder="Agregar un comentario"> 
  <div class ='botonEnviarC'> Enviar </div>
  </section>
  <section class="comentarios">

    <div class='fichaComentario'>
      <div><img class='imgComentario' src=./Imagenes/pruebaImagen.jpg></div>
      <div class ='infoComentario'>
        <p class='nombreComentario'>Nombre Usuario </p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum incidunt illo
          dolores voluptatem voluptate tempore earum. Repellat numquam similique sit culpa itaque voluptate.</p>
      </div>
    </div>
  </section>
</section>



</main>
`;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement
}

