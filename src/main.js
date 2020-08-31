// Este es el punto de entrada de tu aplicacion
import {routes} from './router.js';

//import { myFunction } from './lib/index.js';

//myFunction();
/* window.addEventListener("load", () => {
    router(window.location.href = "#/")
}) */

export const auth = firebase.auth();
export const db = firebase.firestore();

export const guardarObjetosfs = ( nombreNuevoObjeto , descripcionNuevoObjeto ) => 
db.collection('objetos').doc().set(
    {
        nombreNuevoObjeto ,
        descripcionNuevoObjeto
    }
);
/*
export const obtenerObjetos = () => db.collection('objetos').get();

export const cargarPaginaMostrar = () =>{ 
window.addEventListener('DOMContentLoaded', async (e) => {
    const objetosCompletos = await obtenerObjetos()
    objetosCompletos.forEach ( doc => {console.log(doc.data())
    })

})
}
*/

export const cambiarPagina = (stringHash) => { window.location.hash = stringHash}

routes(window.location.hash= "#/")
window.addEventListener('hashchange', () => {routes(window.location.hash)} );


