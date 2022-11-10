const btnSalir = document.querySelector('.btn-salir');

//Validar el token generado desde el back-end para el cliente
const validarToken = ( ) =>{

    const token = localStorage.getItem('token') || '';

    if( token.length <= 10){
        window.location = '../index.html'
        throw new Error( 'No hay token en el servidor' );
    }

};


validarToken();

//Eliminar token cuando el usuario salga de la sesion
btnSalir.addEventListener('click',()=>{

    localStorage.removeItem('token');
});