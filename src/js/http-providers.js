const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUser = 'https://reqres.in/api/users?page=2';
const keyCloud = 'lc1wwj01';
const urlCloud = 'https://api.cloudinary.com/v1_1/dw31wlkgj/upload';


const obtenerChiste = async() => {

    try {
        const respuesta = await fetch(jokeUrl);
        if (!respuesta.ok) {
            return alert('nel');
        }

        const { icon_url, id, value } = await respuesta.json();
        return { icon_url, id, value };

    } catch (error) {
        throw error
    }

};

const obtenerUsuario = async() => {

    try {
        const respuesta = await fetch(urlUser);
        const { data } = await respuesta.json();
        return data;

    } catch (error) {
        throw error
    }

};

const subirImagen = async(file) => {
    const formData = new FormData();
    formData.append('upload_preset', keyCloud);
    formData.append('file', file);

    try {
        const { url } = await (await fetch(urlCloud, {
            method: 'POST',
            body: formData
        })).json();
        return url;
    } catch (error) {
        throw error;
    }

};

export {
    obtenerChiste,
    obtenerUsuario,
    subirImagen
}