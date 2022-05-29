/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
!boton resetear
!$botonResetear.onclick = function () {
 ! $divRespuesta.classList.add("oculto");
!};

!tofix, botconfirmar.onclick necesita primero borrar los integrantes anteriores

*/

const $botonConfirmar = document.querySelector(".confirmar");
const $botonResetear = document.querySelector(".resetear");

const $resultado = document.querySelector(".respuesta");
const $divCalculos = document.querySelector(".calculos");
const $divRespuesta = document.querySelector(".resultados");
let edades = [];
const inputMayor = document.querySelector(".mayor");
const inputMenor = document.querySelector(".menor");
const inputPromedio = document.querySelector(".promedio");
const $botonCalcular = document.querySelector(".calcular");

$botonConfirmar.onclick = function () {
  // borrarIntegrantesAnteriores();
  let $cantidadIntegrantes = document.querySelector(
    ".cantidad-integrantes"
  ).value;

  let numeroIntegrantes = 0;

  for (let i = 1; i <= $cantidadIntegrantes; i++) {
    numeroIntegrantes++;
    crearIntegrantes(i);
  }
  $divCalculos.classList.remove("oculto");
  event.preventDefault();
};

$botonCalcular.onclick = function () {
  mostrarRespuesta();
  tomarValorinputs();
  meterCosas();

  event.preventDefault();
};
// function borrarIntegrantesAnteriores() {
//   let label = document.querySelectorAll("nuevo-label");
//   let input = document.querySelectorAll("nuevo-input");
//   // input.remove();
//   // label.remove();
// }
