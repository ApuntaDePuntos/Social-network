// import './lib/home.css'

export const Home = () => {
  // Este es el HTML despue ddel <Body> 
  let views =
    ` <header class='header'>
<a href="/"><img class='imagenP' src=./Imagenes/logoP.svg alt="home"></a>
</header>
<nav class='nav'>
<a href="#/editprofile"><img class='botonBarra' src=./Imagenes/edit.svg></a>
<a href="#/profile"> <img class='botonBarra' src="Imagenes/inicio.svg"></a>
</nav>
<main class='contenedor>'>
<section class="grid">
  <label>
    <div class='saludo' id='nameReplace'>Hola! tu XXX</div>
  </label>
    <div class='botonCentro' >
  <button class='botonNuevoObjeto' id='nuevoItemBoton'>Nuevo Item</button>
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


export const turnPageNewItem = async () => {
  const nuevoItemBoton = document.getElementById('nuevoItemBoton');
  nuevoItemBoton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '#/newitem'; 
  })
}
