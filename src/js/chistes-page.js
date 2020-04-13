import { obtenerChiste } from "./http-providers";

const body = document.body;
let btnOtro, orList;
const crearChisteHtml = () => {
    const html = ` 
  <h1 class="mt-5">Chistes</h1>
<br>
<button class="btn btn-primary">Otro chiste</button>
<ol class="mt-2 list-group">
   
</ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);

};


const eventos = () => {
    orList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    });

};

const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b> : ${chiste.value}`;
    olItem.classList.add('list-group-item');
    orList.append(olItem);
};
export const init = () => {
    crearChisteHtml();
    eventos();
}