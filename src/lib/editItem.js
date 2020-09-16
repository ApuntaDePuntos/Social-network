import { editarInfoItem } from '../FireBaseFunciones/EditarInformacionItem.js'

const db = firebase.firestore();

export const EditItem = async () => {
  let post = await editarInfoItem()
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

  ${post}
  
<section class = "modal" id= "pruebaEditar"> <section class = 'cajaModal'> <form id= 'subirNuevoItem')> <div>
<img src="./Imagenes/camara.svg" class='botonCamara' alt="">
</div> 
<input type="text" class='itemName' placeholder="Nombre" id= 'nombreNuevoItem'> 
<input type="text" class='itemDescription' placeholder="Descripción" id = 'descripcionNuevoItem'> 
<button type= 'submit' class= 'botonCrear' id = 'enviarNuevoItem'> Editar </button> <button class= 'cerrar'> x </button> 
</form> </section> </section> 

  <section class="agregarMensaje">
  <input type="text" class='editarComentario' placeholder="Agregar un comentario"> 
  <div class ='botonEnviar'> Enviar </div> 
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


export const eliminarObjeto = async () => {
  let id = localStorage.getItem('itemId')
  document.querySelector('.botonBasurero').addEventListener('click', (e) => {
    console.log('Click delete')
    db.collection("objetos").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  })
}

export const editarComentario = async () => {
  //let id = localStorage.getItem('itemId')
  //let espacioEditarComentario = document.getElementById('pruebaEditar');
  //let formatoEdicion= '';
  document.querySelector('.botonEditar').addEventListener('click', (e) => { modal() })
}

function modal () {
  const modal = document.querySelector('.modal')
  modal.style.display = ('block');
      document.querySelector('#subirNuevoItem').addEventListener('submit', editarPrueba)
      document.querySelector('.cerrar').addEventListener('click', cerrarprueba)

}

function cerrarprueba () {
  const modal = document.querySelector('.modal')
  modal.style.display = ('none');
}


function editarPrueba() {
  let id = localStorage.getItem('itemId')
  let titulo = document.getElementById('nombreNuevoItem').value;
  let comment = document.getElementById('descripcionNuevoItem').value;
  db.collection("objetos").doc(id).update({
    "nombreNuevoItem": titulo,
    "descripcionNuevoItem": comment
  }).then(() => {
    cerrarprueba()
    console.log('si funciona')
  })
  
}



