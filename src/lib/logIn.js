//import function datos (obj);
import { auth } from '../main.js';

// Modal Crear usuario Ventana DOM

export const modalRegistro = async () => {

let pruebamodal = document.getElementById('pruebamodal')
let registro = 
`<section type = modal id = 'modalFormato'>

<form class="gridLogin" id= 'formularioRegistro'>

<label><input type="text" id="correoRegistro" class="filded" placeholder="Correo "></label>
<label><input type="password" id="contrasenaRegistro" class="filded" placeholder="Contrasena"> </label>
<label><input type="password" id="confirmaContrasena" class="filded" placeholder="Confirma contrasena"> </label>
<label><button type= 'submit' class= 'sendButton' id = 'enviarRegistro'> Enviar </button>
<div id="cerrarModal" class="modal_cerrar" > x <div>

</form>
</section> `

pruebamodal.innerHTML = registro;
}


// Funcion capturar datos para crear cuenta. 

export const datos = async () => {
  const formularioRegistro = document.getElementById('formularioRegistro');
  formularioRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    console.log(correoRegistro, contrasenaRegistro)
    auth
      .createUserWithEmailAndPassword(correoRegistro, contrasenaRegistro)
      .then(userCredential => {
        console.log('listo!')
      })
      document.getElementById("prueba").style.visibility = "visible";
      document.getElementById("cerrarModal").addEventListener("click", function () {
      document.getElementById("prueba").style.visibility = "hidden";
})
  })
}

// Aca esta el DOM de la pagina Login 

export const Login = async () => {

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

<section > No tienes cuenta? <div type = button id = 'clickRegistro'> registrare Aqui </div> </section> 


</main>`;


  let divElement = document.createElement('div');
  divElement.innerHTML = views
  return divElement
};


// Aca se obtiene los datos para ingresar. REVISAR MODAL CLICK 

export const autenticar = async () => {

  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    console.log(correo, contrasena)
    auth
      .signInWithEmailAndPassword(correo, contrasena)
    console.log('check!')

    auth.onAuthStateChanged((user) => {
      if (user) { window.location.hash = '#/home'; }
      else { window.location.hash = '#/'; }
    })
  })
  const clickRegistro = document.getElementById('clickRegistro');
  clickRegistro.addEventListener("click", (e) => modalRegistro);
}


