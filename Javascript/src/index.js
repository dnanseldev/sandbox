import * as ex from './map-sample.js'
import * as el from './manipulating-dom-elements.js'


//const ul = document.createElement('ul');
//const li = document.createElement('li');

let root = document.querySelector('#root');
const ul = document.createElement('ul');

/*
ex.listaModelosCarros.forEach(modelo => {
    root.innerHTML += `<p>${modelo}</p>`
});
*/

/*
ex.listaCarrosFiltrados.forEach(carro => {
    root.innerHTML += `<p>${carro.model}</p>`
});
*/



ex.listaModelosCarros.forEach(carro => {
    const li = document.createElement('li');
    li.innerText = carro;
    li.classList.add('Carros');
    ul.appendChild(li);
});

root.appendChild(ul);