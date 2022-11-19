import { buscarUsuarios } from "../JS/buscar-usuario.js";
import { getUsuarios } from "../JS/proveedor-http.js";

const tbody = document.querySelector('tbody');
const modal = document.querySelector('.form-editar');

const mostrarUsuarios =( { user_id, user_name, user_email, user_rol } )=>{

    const html =`
    <tr class="tr-info" name='${user_name}'>
      <th class='alinear' scope="row">${user_id}</th>
      <td class='alinear'>${user_name}</td>
      <td class='alinear'>${user_email}</td>
      <td class='alinear'>${user_rol}</td>
      <td>
      <div class="btn-group" role="group" aria-label="">
      <button type="button" name='editar' class="btn btn-primary" value='${ user_id }'>Editar</button>
      <button type="button" name='eliminar' class="btn btn-danger" value='${ user_id }'>Eliminar</button>
      </div>
      </td>
    </tr>
    `;

    tbody.innerHTML += html;
};

const editarUsuarios =( {user_id, user_name, user_email, user_rol } )=>{


  const html =`
        <div class="mb-3">
            <label for="id" class="form-label label-20rem">ID:</label>
            <input type="text" class="form-control font-zise-2" name="id" id="_id" aria-describedby="helpId" value='${user_id}' required disabled/>
        </div> 
        <div class="mb-3">
            <label for="nombreCompleto" class="form-label">Nombre completo</label>
            <input type="text" name="user_name" class="form-control" id="nombreCompleto" value='${ user_name }' required>
          </div>
        <div class="mb-3">
          <label for="email" class="form-label">Correo electronico</label>
          <input type="email" name="user_email" class="form-control" id="email" value='${ user_email }' required>
          <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Rol</label>
          <select class="form-select" name="user_rol" id="user_rol" required>
          <option value="USER_ROL" ${(user_rol === 'USER_ROL')?'selected':''}>Usario</option>
          <option value="ADMIN_ROL" ${(user_rol === 'ADMIN_ROL')?'selected':''}>Administrador</option>
          </select>
        </div>

        <div class="d-grid gap-2 text-center">
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Guardar cambios</button>
        </div>
      `;

      modal.innerHTML = html;
}

//Obtenemos los usuarios del back-end.
const usuarios = await getUsuarios();

//Enviamos la informacion a una funcion que mostrara los datos al cliente en elementos tr en html.
usuarios.forEach( mostrarUsuarios);
 
//Enviamos los elementos tr para filtrar la busqueda en el archivo "buscar-usuarios.js".
buscarUsuarios( document.querySelectorAll('.tr-info') );

export{
  editarUsuarios
}
