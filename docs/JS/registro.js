import { postUsuarios } from "./proveedor-http.js";

const formRegistro = async() => {

const registroForm = document.querySelector('.form-registro');
    
registroForm.addEventListener('submit', async( event )=>{
    event.preventDefault();
    
    const formData={};

    for(let i of registroForm.elements){
        if(i.name.length>0){
            formData[i.name]=i.value;
        }
    }
    
   await postUsuarios( formData )
   .catch( ( { errors } ) =>{
    const error = errors[0].msg;
    alert(error);
   });
});
};

export{
    formRegistro
}