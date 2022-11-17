import { getUsuarios,getUsuarioID,postUsuarios,putUsuario,deleteUsuario,postLogin } from './proveedor-http.js';
import { formRegistro } from'./registro.js';
import { formLogin } from './auth.js';

export{
    formRegistro,
    formLogin,
    getUsuarios,
    getUsuarioID,
    putUsuario,
    postUsuarios,
    deleteUsuario,
    postLogin
}