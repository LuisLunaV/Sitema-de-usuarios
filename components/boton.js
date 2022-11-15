const crearBoton =( elemento )=>{
    const html = `
    <li class="nav-item">
    <a class="nav-link" href="./administrador.html">Ver usuarios</a>
    </li>
    `;

    elemento.innerHTML += html;
};


export{
    crearBoton
}