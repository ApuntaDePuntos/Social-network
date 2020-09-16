
import { obtenerObjetos } from '../FireBaseFunciones/FBobtenerObjetos.js';
import { cargarPaginaMostrar } from '../FireBaseFunciones/FBobtenerObjetos.js';


obtenerObjetos()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      //console.log(doc.id, " => ", doc.data());
      const infoCadaObjeto = doc.data()
    });
  });

export const Home = async () => {
  // Este es el HTML despue ddel <Body> 
  let post = await cargarPaginaMostrar()
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

  ${post}

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

export const AbrirPorId = async () => {
  const botonesObjetos = document.querySelectorAll('.fichaObjeto')
  botonesObjetos.forEach((elementoCadaBoton) => {
    elementoCadaBoton.addEventListener("click", (e) =>  {
      let itemId = e.currentTarget.id
      localStorage.setItem ('itemId', itemId)
      window.location.hash = '#/edititem';
    }
    )
  })
}



