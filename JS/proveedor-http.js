const url = (window.location.pathname.split('/').reverse()[0] === 'index.html')?
'https://crud-mysql-new-production.up.railway.app/api/auth/login':
'https://crud-mysql-new-production.up.railway.app/api/usuarios/';

// const url = (window.location.pathname.split('/').reverse()[0] === 'index.html')?
// 'http://localhost:8080/api/auth/login':
// 'http://localhost:8080/api/usuarios/';


//Registramos el usuario
const postUsuarios = async( formulario )=>{

    try {
        
       const resp = await fetch( url, {
        method: 'POST',
        body: JSON.stringify( formulario ),
        headers: {
            'Content-Type':'application/json'
        }
    });

    //Si el registro se realiza con exito, que nos regresa nuevamente a la pagina principal 
    if( resp.ok ){
        window.location = '../index.html';
    }
    else{
        //Si el registro falla, que nos envie el error desde back-end
        const err = await resp.json()
        throw  err ;
    } 
    } catch (error) {
        throw error;
    }
   
};

const postLogin = async( formulario )=>{
    try {
        const resp = await fetch( url ,{
            method: 'POST',
            body: JSON.stringify( formulario),
            mode:'cors',
            headers: {
                'Content-Type':'application/json'
            },
        });
        // console.log(await resp.json())

    //Si el registro se realiza con exito, que nos regresa nuevamente a la pagina principal 
    if( resp.ok ){
        // const { token } = await resp.json();
        // localStorage.setItem( 'token', token );
        window.location = './HTML/principal.html';
        
        
    }
    else{
        //Si el registro falla, que nos envie el error desde back-end
        const err = await resp.json()
        throw  err ;
    } 

    } catch (error) {
        throw error;
    }

};

export{
    postUsuarios,
    postLogin
}