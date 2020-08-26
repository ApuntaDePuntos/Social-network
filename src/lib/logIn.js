//import function datos (obj);
import {auth} from '../main.js';

export const Login = async() => {

  // Este es el HTML despue ddel <Body> 
  let views =
`<main class="contenedorLogin"> 
<section class="logoLogin">
  <img class="imagenLogin" src="imagenes/logo.png">
</section>
<form class="gridLogin" id= 'formulario'>
<label><input type="text" id="correo" class="filded" placeholder="Correo"></label>
<label><input type="password" id="contrasena" class="filded" placeholder="Contrasena"> </label>
<label><button type= 'submit' class= 'sendButton' id = 'enviarLogin'> Enviar </button>
</form>
<section > No tienes cuenta? <div type= button > registrare Aqui </div> 
</main>`;


let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement
};

/* const datos= document.getElementById('formulario')
datos.addEventListener('submit',()=> {
  console.log('send')
}) */



export const autenticar = async () => {

  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit',(e)=> {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    console.log(correo , contrasena)
    auth 
        .signInWithEmailAndPassword(correo,contrasena)
        console.log( 'check!')

        auth.onAuthStateChanged((user)  => {
          if (user)  { window.location.hash = '#/home'; }
          else { window.location.hash = '#/';}
    
  })
})
}

/*



export const  datos = async() =>{
  const formularioModal = document.getElementById('formularioModal');
  formularioModal.addEventListener('click',(e)=> {
    e.preventDefault();
    const correoModal = document.getElementById('correoModal').value;
    const contrasenaModal = document.getElementById('contrasenaModal').value;
    console.log( correoModal , contrasenaModal)
    auth
        .createUserWithEmailAndPassword( correoModal , contrasenaModal )
        .then(userCredential => {
        console.log('listo!')
      })
    //$('#modalFormato').modal('hide')
  })
}

*/