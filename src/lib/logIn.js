//import function datos (obj);
import { auth } from '../main.js';
import { FBcrearUsuario } from '../FireBaseFunciones/FBcrearUsuario.js';
import { FBautenticar } from '../FireBaseFunciones/FBautenticar.js';

// Modal Crear usuario Ventana DOM

export const modalRegistro = async () => {

let registro = 
`<section type = modal id = 'modalFormato' class="gridLogin">

<form class="modal" id= 'formularioRegistro'>

<label><input type="text" id="correoRegistro" class="filded" placeholder="Correo "></label>
<label><input type="password" id="contrasenaRegistro" class="filded" placeholder="Contrasena"> </label>
<label><input type="password" id="confirmaContrasena" class="filded" placeholder="Confirma contrasena"> </label>
<label><button type= 'submit' class= 'sendButton' id = 'enviarRegistro'> Enviar </button>
<div id="cerrarModal" class="modal_cerrar" > x <div>

</form>
</section> `

let divElement = document.createElement('div');
divElement.innerHTML = registro
return divElement
}


// Funcion capturar datos para crear cuenta. 

export const crearCuenta = async () => {
  const formularioRegistro = document.getElementById('formularioRegistro');
  formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const correoRegistro = document.getElementById('correoRegistro').value;
    const contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    console.log(correoRegistro, contrasenaRegistro)
    FBcrearUsuario(correoRegistro, contrasenaRegistro)
      //document.getElementById("pruebamodal").style.visibility = "visible";
      //document.getElementById("cerrarModal").addEventListener("submit", function () {
      //document.getElementById("pruebamodal").style.visibility = "hidden";
//})
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


<section class= 'parrafoRegistrarse' > No tienes cuenta? <div type='button' id = 'clickRegistro'> registrare Aqui </div> </section> 


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
    FBautenticar(correo, contrasena)
  })

  const clickRegistro = document.getElementById('clickRegistro');
clickRegistro.addEventListener("click", (e) => modalRegistro);
}



