import { postLogin } from './proveedor-http.js';
import { validarCampoLogin } from '../helpers/validar-campos.js';

const formInicio    = document.querySelector('.form-inicio');

const formLogin = ()=>{

formInicio.addEventListener('submit', async( event )=>{
    event.preventDefault();

    const formData={};

    for( let i of formInicio.elements){
        if(i.name.length > 0) formData[i.name] = i.value ;
    }

   await postLogin(formData)

   .catch( validarCampoLogin );

});

};

export{
    formLogin
}