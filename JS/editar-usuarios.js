import { getUsuarioID,putUsuario,deleteUsuario } from "./index.js";
import { editarUsuarios } from '../components/usuarios.js';

const tbody = document.querySelector('tbody');

tbody.addEventListener('click', async( event )=>{
const elemento = event.target.name;
const id       = event.target.value;
const usuario  = event.target.parentElement.parentElement.parentElement;

if( elemento === 'editar'){

    const modal = new bootstrap.Modal(document.getElementById('modelId'),{ keyboard: false, });
    
    const usuario = await getUsuarioID( id );
    editarUsuarios( usuario );
    
    modal.show();
}

if( elemento === 'eliminar'){
   const confirmacion = confirm('Esta seguro que desea eliminar el usuario');
   
   if( !confirmacion ) return;
   
   await deleteUsuario( id );

   tbody.removeChild( usuario );

}
});

const formEditar =()=>{
    const formModule = document.querySelector('.form-editar');
    formModule.addEventListener('submit', async(e)=>{
        e.preventDefault();

        const formData = {};

        for( let i of formModule.elements){
            if( i.name.length > 0){
                formData[i.name]= i.value;
            }
        }

    
        formData.user_name = formData.user_name.toUpperCase();
    
        await putUsuario(formData);
       setTimeout(()=>{
        location.reload();
       },500)

    })
};

formEditar()