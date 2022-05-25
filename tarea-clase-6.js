/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
*crear input que pregunta cantidad de integrantes + boton para confirmar 
*crear div oculto para las respuestas

!boton asigna valor a la cantidad de integrantes
!funciones mayor menor promedio


*/

let $botonConfirmar = document.querySelector(".confirmar");

$botonConfirmar.onclick = function () {
  let $cantidadIntegrantes = document.querySelector(
    ".cantidad-integrantes"
  ).value;
  let numeroIntegrantes = 0;

  for (let i = 0; i < $cantidadIntegrantes; i++) {
    numeroIntegrantes++;

    console.log(numeroIntegrantes);
  }
};

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
---------------------------


*/
