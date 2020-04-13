const urlCrud = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    const { data } = await (await fetch(`${urlCrud}/ ${id}`)).json();
    return data;
};


const crearUsuario = async(usuario) => {
    const create = await (await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'aplication/json'
        }
    })).json();
    return create;
};
export {
    getUsuario,
    crearUsuario
}