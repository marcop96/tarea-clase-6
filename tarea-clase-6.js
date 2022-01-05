/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
---------------------------

preguntar cantidad de integrantes en un input   HECHO
         - al presionar un boton se crean inputs y labels en base a la cantidad de integrantes Y UN BOTON PARA CALULAR LAS EDADES
        contenido de label (integrante familiar #X) - inputs placeholder (ingresar edad del integrante X)
        botón calcular 
          - muestra tres campos pre-existentes (ocultos)     HECHO
          calcula menor mayor promedio en esos 3 campos

*/
let cantidadIntegrantes;
let $botonIngresar = document.querySelector("#boton-ingresar");
const $botonResultado = document.querySelector("#boton-resultado");
$botonIngresar.onclick = function () {
  const $formIntegrantes = document.querySelector("#edad-integrantes");

  cantidadIntegrantes = document.querySelector("#ingresar-integrantes").value;
  //si declaro la variable fuera dela función toma el valor al principio y nunca cambia
  const $divResultado = document.querySelector("#resultado");
  console.log(cantidadIntegrantes);
  for (let i = 1; i <= cantidadIntegrantes; i++) {
    crearLabel(i);
    crearInput(i);
    const break2 = document.createElement("br");
    $formIntegrantes.appendChild(break2);
    $divResultado.classList.remove("oculto");
  }
};
$botonResultado.onclick = function () {
  let edades = [];

  for (let i = 1; i <= cantidadIntegrantes; i++) {
    let textoInputs = Number(document.getElementById(i).value);
    edades.push(textoInputs);
  }
  calcularMayor(edades);
  calcularMenor(edades);
  calcularPromedio(edades);
  let mayor = calcularMayor(edades);
  let menor = calcularMenor(edades);
  let promedio = calcularPromedio(edades);
  meterCosas(mayor, menor, promedio);
};
