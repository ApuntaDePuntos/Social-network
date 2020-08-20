// import './lib/logIn.css'

export const Login = () => {
  // Este es el HTML despue ddel <Body> 
  let views =
`<main class="contenedorLogin"> 
<section class="logoLogin">
  <img class="imagenLogin" src="imagenes/logo.png">
</section>
<form class="gridLogin" id= 'formulario'>
<label><input type="text" id="correo" class="filded" placeholder="Correo"></label>
<label><input type="password" id="contrasena" class="filded" placeholder="Contrasena"> </label>
<label><a href="#/home"> <button type= 'submit' class= 'sendButton' id = 'enviarLogin'>Enviar</div></a></button>
</form>


</main>`;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement
}
const datos= document.getElementById('formulario')
datos.addEventListener('submit',()=> {
  console.log('send')
})

export datos