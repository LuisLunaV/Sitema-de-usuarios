import { crearBoton } from "../components/boton.js";

const navUl = document.querySelector('.navbarUl');

const validarRol =()=>{
const rol = localStorage.getItem('rol');
if(rol === 'ADMIN_ROL') crearBoton(navUl) ;
};

validarRol();