import { getUsuarioID,putUsuario } from "./index.js";
import { editarUsuarios } from '../components/usuarios.js';

const tbody = document.querySelector('tbody');

tbody.addEventListener('click', async( event )=>{
const elemento = event.target.name;
const id = event.target.value;


if( elemento === 'editar'){

    const modal = new bootstrap.Modal(document.getElementById('modelId'),{ keyboard: false, });
   
    const usuario = await getUsuarioID( id );
    editarUsuarios( usuario );
    modal.show();
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

       await putUsuario(formData);

    })
};

formEditar()