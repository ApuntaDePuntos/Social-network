// import './lib/home.css'

export const Home = () => {
  // Este es el HTML despue ddel <Body> 
  let views =
` <header class='header'>
<a href="/"><img class='imagenP' src=./Imagenes/logoP.svg alt="home"></a>
</header>
<nav class='nav'>
<img class='botonBarra' src=./Imagenes/Arrow.svg>
<img class='botonBarra' src=./Imagenes/home.svg>
<img class='botonBarra' src=./Imagenes/edit.svg>
</nav>
<main class='contenedor>'>
<section class="grid">
  <label>
    <div class='saludo' id='nameReplace'>Hola! tu XXX</div>
  </label>

    <div class='botonNuevoObjeto' id='nuevoItem'>Nuevo Item</div>

  <div class='fichaObjeto'>
    <div><img class='imgFichaObjeto' src=./Imagenes/pruebaImagen.jpg></div>
    <div class ='infoFichaObjeto'>
      <p class='nombreFichaObjeto'>Aca va el nombre </p> 
      <img class='botonObjeto' src=./Imagenes/corazonRojo.svg>
      <img class='botonObjeto' src=./Imagenes/comentario.svg>
      <p class='textoFichaObjeto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum incidunt illo
        dolores voluptatem voluptate tempore earum. Repellat numquam similique sit culpa itaque voluptate.</p>
    </div>
  </div>

  <div class='fichaObjeto'>
    <div><img class='imgFichaObjeto' src=./Imagenes/pruebaImagen.jpg></div>
    <div class ='infoFichaObjeto'>
      <p class='nombreFichaObjeto'>Aca va el nombre </p> 
      <img class='botonObjeto' src=./Imagenes/corazonRojo.svg>
      <img class='botonObjeto' src=./Imagenes/comentario.svg>
      <p class='textoFichaObjeto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum incidunt illo
        dolores voluptatem voluptate tempore earum. Repellat numquam similique sit culpa itaque voluptate.</p>
    </div>
  </div>

</section>

</main>`;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement
}

