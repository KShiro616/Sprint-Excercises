const $titulo = document.getElementById("titulo");

let tituloPrincipal = "Frutas";

$titulo.innerText = tituloPrincipal;

const footer_header = document.querySelectorAll(".clase1")

footer_header.forEach(element => element.classList.add("footer_header"));

const footer_p = document.querySelector("footer p");

footer_p.textContent+= " Nicolas Rodriguez Cohort N°53";

const $main = document.querySelector("main");

$main.innerHTML+= "<div id='contenedor'></div>";

const divContenedor = document.getElementById("contenedor");

divContenedor.classList.add("divContainer");


function cardSpitter(nombre, foto, descripcion) {
  return `
  <article class="card">
  <h1>${nombre}</h1>
  <img src="${foto}">           
  <p>${descripcion}</p>
  </article>
  `
};

function imprimirArray(frutas) {
  let guardarRes = "";
  for (const fruta of frutas) {
    guardarRes+= cardSpitter(fruta.nombre, fruta.foto, fruta.descripcion);
  }
  divContenedor.innerHTML+= guardarRes;
};


imprimirArray(frutas)

$main.innerHTML+= `<div id="lista"></div>`; 

const lista = document.getElementById("lista");

lista.innerHTML = `<h1>Frutas Dulces</h1>`;

lista.classList.add("lista");

function iterarArray(array) {
  const listaDesordenada = document.createElement("ul");
  array.forEach(fruta => fruta.esDulce ? listaDesordenada.innerHTML+= `<li>${fruta.nombre}</li>` : "");
  return listaDesordenada;
}

function mostrarLista(arrayFrutas, appendeame) {
  const UL = iterarArray(arrayFrutas);
  console.log(UL)
  appendeame.appendChild(UL);
}

mostrarLista(frutas, lista);










