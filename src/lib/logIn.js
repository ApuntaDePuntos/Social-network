// import './lib/logIn.css'

export const Login = () => {
  // Este es el HTML despue ddel <Body> 
  let views =
`<main class="contenedorLogin"> 
<section class="logoLogin">
  <img class="imagenLogin" src="imagenes/logo.png">
</section>
<section class="gridLogin" id= 'cuadricula'>
<label><input type="text" id="email" class="filded" placeholder="E-mail"></label>
<label><input type="password" id="contrasena" class="filded" placeholder="Password"> </label>
<label><div class= 'sendButton' id = 'enviarLogin'>Enviar</div></label>
</section>
</main>`;
let divElement = document.createElement('div');
divElement.innerHTML = views
return divElement
}