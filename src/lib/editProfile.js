// import './lib/editProfile.css'

export const EditProfile = () => {
    // Este es el HTML despue ddel <Body> 
    let views = `
    <header class='header'>
    <a href="/"><img class='imagenP' src=./Imagenes/logoP.svg alt="home"></a>
  </header>
  <nav class='nav'>
  <img class='botonBarra' src=./Imagenes/Arrow.svg>
  <a href="#/home"> <img class='botonBarra' src="./Imagenes/home.svg"></a>
  <a href="#/profile"> <img class='botonBarra' src="Imagenes/inicio.svg"></a>
  </nav>
  <main class='contenedor>'>
    <section class="grid">
      <section class='informacionP'>
        <label>
          <p class="title"> Perfil </p>
        </label>
        <label> <input type="text" id="nombre" class="filded" placeholder="Nombres y Apellidos" required></label>
        <label><input type="text" id="nombreMarca" class="filded" placeholder="Nombre Marca"></label>
        <label><input type="text" id="sitioWeb" class="filded" placeholder="Sitio web"></label>
        <label><input type="password" id="Contraseña" class="filded" placeholder="Contraseña">
      </section>
      <section class='informacionP'>
        <label>
          <p class="title"> Informacion alterna </p>
        </label>
        <label><input type="text" id="Telefono" class="filded" placeholder="Telefono"></label>
        <label><input type="text" id="correoAElectrónico" class="filded" placeholder="Correo alternativo"></label>
      </section>
  </main>` ;
    let divElement = document.createElement('div');
    divElement.innerHTML = views
    return divElement
};