import { getUsuarios } from "../JS/proveedor-http.js";

const tbody = document.querySelector('tbody');

const mostrarUsuarios =( {user_id, user_name, user_email, user_rol} )=>{

    const html =`
    <tr class="tr-info">
      <th class='alinear' scope="row">${user_id}</th>
      <td class='alinear'>${user_name}</td>
      <td class='alinear'>${user_email}</td>
      <td class='alinear'>${user_rol}</td>
      <td>
      <div class="btn-group" role="group" aria-label="">
      <button type="button" class="btn btn-primary" value=''>Editar</button>
      <button type="button" class="btn btn-danger" value=''>Eliminar</button>
      </div>
      </td>
    </tr>
    `;

    tbody.innerHTML += html;
};

const usuarios = await getUsuarios();
usuarios.forEach( mostrarUsuarios);
