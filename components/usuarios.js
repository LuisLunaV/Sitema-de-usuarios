import { getUsuarios } from "../JS/proveedor-http.js";

const tbody = document.querySelector('tbody');
const modal = document.querySelector('.form-editar');

const mostrarUsuarios =( { user_id, user_name, user_email, user_rol } )=>{

    const html =`
    <tr class="tr-info">
      <th class='alinear' scope="row">${user_id}</th>
      <td class='alinear'>${user_name}</td>
      <td class='alinear'>${user_email}</td>
      <td class='alinear'>${user_rol}</td>
      <td>
      <div class="btn-group" role="group" aria-label="">
      <button type="button" name='editar' class="btn btn-primary" value='${ user_id }'>Editar</button>
      <button type="button" name='elimina' class="btn btn-danger" value='${ user_id }'>Eliminar</button>
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

          <div class="form-check">
          <input type="radio" name="rol" id="user" value="Usuario" ${( user_rol === 'USER_ROL')?'checked':''}/>
          <label for="user" class="label-1-5rem">
          Usuario
          </label>
          </div>
          <div class="form-check">
          <input type="radio" name="rol" id="admin" value="Administrador"   ${( user_rol === 'ADMIN_ROL')?'checked':''}/>
          <label for="admin" class="label-1-5rem">
          Administrador
          </label>
          </div>

        </div>

        <div class="d-grid gap-2 text-center">
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Guardar cambios</button>
        </div>
      `;

      modal.innerHTML = html;
}


const usuarios = await getUsuarios();
usuarios.forEach( mostrarUsuarios);

// editarUsuarios();

export{
  editarUsuarios
}
