      // USAR EN EL FUTURO
    //auth.onAuthStateChanged((user) => {
      //if (user) { window.location.hash = '#/home'; }
    //})
import { db } from '../main.js';

const obtenerObjetos = id => db.collection('objetos').doc(id).get().then (snapshot);
console.log(obtenerObjetos)


export const cargarPaginaMostrar = () => {
    window.addEventListener('DOMContentLoaded', async (e) => {
        const objetosCompletos = await obtenerObjetos()
        objetosCompletos.forEach(doc => {
            console.log(doc.data())

            let divObjetos =
                ` <div class='fichaObjeto'>
<div><img class='imgFichaObjeto' src=./Imagenes/pruebaImagen.jpg></div>
  <div class ='infoFichaObjeto'>
    <p class='nombreFichaObjeto'>${doc.data().nombreNuevoItem} </p> 
    <img class='botonObjeto' src=./Imagenes/corazonRojo.svg>
    <img class='botonObjeto' src=./Imagenes/comentario.svg>
    <p class= ${doc.data().descripcionNuevoItem} </p>
  </div>
</div>`

            let divElement = document.createElement('div');
            divElement.innerHTML = divObjetos
            return divElement
        })
    })
};