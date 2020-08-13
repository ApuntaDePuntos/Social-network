// Este es el punto de entrada de tu aplicacion
import {routes} from './router.js';

import { myFunction } from './lib/index.js';

myFunction();

routes(window.location.hash)
window.addEventListener('hashchange', () => {routes(window.location.hash)} );