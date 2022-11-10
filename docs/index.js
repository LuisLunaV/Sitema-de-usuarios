import { formRegistro, formLogin } from './JS/index.js';

const nombrePagina = window.location.pathname.split('/').reverse()[0];

(nombrePagina === 'index.html') ? formLogin() 
: 
( nombrePagina === 'registro.html') ? formRegistro()
:'';

