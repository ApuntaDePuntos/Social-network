import { Login } from './lib/logIn.js';
import { Home } from './lib/home.js';
import { Profile } from './lib/profile.js';
import { EditProfile } from './lib/editProfile.js';
import { NewItem } from './lib/newItem.js';
import { EditItem } from './lib/editItem.js';
import { Item } from './lib/item.js';
import { autenticar } from './lib/logIn.js';
//import { MostrarModal } from './lib/logIn.js';
import { modalRegistro } from './lib/logIn.js';
import { crearCuenta } from './lib/logIn.js';
import { nuevoItem } from './lib/newItem.js';
import { turnPageNewItem } from './lib/home.js';
import { cargarPaginaMostrar } from './FireBaseFunciones/FBobtenerObjetos.js';



let contenedor = document.getElementById('root');
let contenedorPrueba =  document.getElementById ('prueba'); 
let contenedorPruebaModal = document.getElementById('pruebamodal')

const routes = async(route) => {
    contenedor.innerHTML = ""; 
    contenedorPrueba.innerHTML = ""; 
    contenedorPruebaModal.innerHTML = "";
    switch (route) {
        case '#/':  
                    const loginViews = await Login();
                    await contenedor.appendChild(loginViews) 
                    const loginModal = await modalRegistro()
                    //await MostrarModal()
                    await contenedorPruebaModal.appendChild(loginModal) 
                    await autenticar()
                    await crearCuenta() 
                    break; 
        case '#/home':
                    const homeView =  await Home(); 
                    await contenedor.appendChild( homeView )
                    const ObjetosView = await cargarPaginaMostrar()
                    await contenedorPrueba.appendChild( ObjetosView )
                    await turnPageNewItem()
                    break;
        case '#/profile': 
                    const profileViews = await Profile();
                    await contenedor.appendChild( profileViews ) 
                    break;
        case '#/editprofile': 
                    const editProfileViews = await EditProfile() ;
                    await contenedor.appendChild(editProfileViews )
                    break;
        case '#/newitem'   : 
                    const newItemView = await  NewItem();
                    await  contenedor.appendChild( newItemView )
                    await nuevoItem()
                    break;
        case '#/edititem': 
                    const editItemView = await EditItem();
                    await   contenedor.appendChild( editItemView )
                    break;
        case '#/item': 
                    const itemView = await Item()
                    await    contenedor.appendChild( itemView )
                    break;
        //case '/register'   : return  { contenedor.appendChild( Register() )}
        //default : return console.log(404)
    }
};
export { routes };