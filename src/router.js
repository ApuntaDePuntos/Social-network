import { Login } from './lib/logIn.js';
import { Home } from './lib/home.js';
import { Profile } from './lib/profile.js';
import { EditProfile } from './lib/editProfile.js';
import { NewItem } from './lib/newItem.js';
import { EditItem } from './lib/editItem.js';
import { Item } from './lib/item.js';
import { autenticar } from './lib/logIn.js';
import { modalRegistro } from './lib/logIn.js';
import { datos } from './lib/logIn.js';
import { nuevoItem } from './lib/newItem.js';
import { turnPageNewItem } from './lib/home.js';


let contenedor = document.getElementById('root');
let contenedorPrueba =  document.getElementById ('prueba'); 

const routes = async(route) => {
    contenedor.innerHTML = ""; 
    contenedorPrueba.innerHTML = ""; 
    switch (route) {
        case '#/':  
                    const loginViews = await Login();
                    await contenedor.appendChild(loginViews) 
                    await modalRegistro()
                    await autenticar()
                    await datos() 
                    break; 
        case '#/home':
                    const homeView =  await Home(); 
                    await contenedor.appendChild( homeView )
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