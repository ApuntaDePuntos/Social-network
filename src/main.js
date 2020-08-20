// Este es el punto de entrada de tu aplicacion
import {routes} from './router.js';

import { myFunction } from './lib/index.js';

import { datos } from './lib/logIn';

console.log (datos)
myFunction();

routes(window.location.hash)
window.addEventListener('hashchange', () => {routes(window.location.hash)} );


