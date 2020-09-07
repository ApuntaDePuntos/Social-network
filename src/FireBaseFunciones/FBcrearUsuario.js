import {auth} from '../main.js';

export const FBcrearUsuario = async (correoRegistro, contrasenaRegistro) => {
    auth
        .createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
        .then(userCredential => {
            console.log('Se creo la cuenta!')
            window.location.reload();
            //window.location.hash = '#/';
        })
}