import { Login } from './lib/logIn.js';
import { Home } from './lib/home.js';
import { Profile } from './lib/profile.js';
import { EditProfile } from './lib/editProfile.js';
import { NewItem } from './lib/newItem.js';
import { EditItem } from './lib/editItem.js';
import { Item } from './lib/item.js';
//import { Register } from './lib/index.js';

let contenedor = document.getElementById('root');

const routes = (route) => {
    
    contenedor.innerHTML = ""; 
    switch (route) {
        case '#/': return contenedor.appendChild( Login ()) 
        case '#/home'      : return  contenedor.appendChild( Home() )
        case '#/profile'   : return contenedor.appendChild( Profile() ) 
        case '#/editprofile'      : return contenedor.appendChild( EditProfile() )
        case '#/newitem'   : return  contenedor.appendChild( NewItem() ) 
        case '#/edititem'   : return   contenedor.appendChild( EditItem() )
        case '#/item'   : return   contenedor.appendChild( Item() )
        //case '/register'   : return  { contenedor.appendChild( Register() )}
        default : return console.log(404)
    }
};
export { routes };