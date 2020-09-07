import {auth} from '../main.js';

export const FBautenticar = async (correo , contrasena ) => {

        auth.signInWithEmailAndPassword(correo, contrasena)
            .then(() => {
                console.log('check!')
                window.location.hash = '#/home'
            })
            .catch(() => {
                console.log('Hay un error')
                window.location.hash = '#/';
            })
        // USAR EN EL FUTURO y en el ROUTER
        //auth.onAuthStateChanged((user) => {
        //if (user) { window.location.hash = '#/home'; }
        //})
}