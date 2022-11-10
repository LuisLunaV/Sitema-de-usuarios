const inputUsuario  = document.querySelector('#input-usuario');
const inputPassword = document.querySelector('#input-password');

const validarCampoLogin =( err )=>{

    if( err.error_usuario || err.errors ){
        inputUsuario.classList.add('shake-horizontal');
        setTimeout(()=>{
            inputUsuario.classList.remove('shake-horizontal');
        }, 4000)};

        if( err.error_password ){
            inputPassword.classList.add('shake-horizontal');
            setTimeout(()=>{
            inputPassword.classList.remove('shake-horizontal');
            }, 4000)};

};

export{
    validarCampoLogin
}