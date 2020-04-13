import { obtenerUsuario } from "./http-providers";

const body = document.body;
let tbody = null;
const crearHtml = () => {

    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);
    tbody = document.querySelector('tbody');

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
// }
const crearFilaUsuario = (usuario, id) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    const html = `
        <td scope="col"> ${id} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col">${usuario.first_name} ${usuario.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${usuario.avatar}">
        </td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild(tr);

}


export const init = async() => {

    crearHtml();
    const lista = await obtenerUsuario();
    let id = 0;
    for (const iterator of lista) {
        crearFilaUsuario(iterator, ++id);
    }


}