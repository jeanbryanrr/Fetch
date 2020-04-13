import { subirImagen } from './http-providers';

const body = document.body;
let inputFile, imgFoto, h2;

const crearInpuHtml = () => {
    const html = `
<h1 class="mt-5"> Subir archivos</h1>
<hr>
<label>Seleccione una fotografia</label>

<input type ="file"></input>
<br>
<h2></h2>
<img  id="foto" class="img-thumbnail"></img> 
`;

    const div = document.createElement('div');
    div.innerHTML = html;

    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
    h2 = document.querySelector('h2');

};
const eventos = () => {
    inputFile.addEventListener('change', (event) => {

        if (event.target.files) {
            h2.innerText = 'Subiendo imagen ..';
            const file = event.target.files[0];
            subirImagen(file).then((res) => {
                imgFoto.src = res;
                h2.innerText = '';
            });

        }

    });
};


export const init = () => {
    crearInpuHtml();
    eventos();
};