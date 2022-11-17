import { getUsuarios,getUsuarioID,postUsuarios,putUsuario,postLogin } from './proveedor-http.js';
import { formRegistro } from'./registro.js';
import { formLogin } from './auth.js';

export{
    formRegistro,
    formLogin,
    getUsuarios,
    getUsuarioID,
    putUsuario,
    postUsuarios,
    postLogin
}