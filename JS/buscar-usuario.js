const buscar = document.querySelector('.buscar-usuario');

const buscarUsuarios = ( body ) => {

    buscar.addEventListener('keyup',( event )=>{

       const nombre = event.target.value;
       
       body.forEach(element => {
        (element.textContent.toLowerCase().includes(nombre) ) ?
        element.classList.remove('filter'):
        element.classList.add('filter');
    });
    });

}

export{
    buscarUsuarios
}