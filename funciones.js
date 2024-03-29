function calcularMayor(edades) {
  let mayor = Math.max(...edades);
  return mayor;
}

function calcularMenor(edades) {
  let menor = Math.min(...edades);
  return menor;
}

function calcularPromedio(edades) {
  let suma = 0;
  for (x = 0; x < edades.length; x++) {
    suma += edades[x];
  }
  return suma / edades.length;
}
function crearInput(i) {
  let $nuevoInput = document.createElement("input");
  // $resultado.appendChild($nuevoInput);
  $nuevoInput.classList.add("nuevo-input");
  let br = document.createElement("br");
  // $resultado.appendChild(br);
  return $nuevoInput;
}
function crearLabel(i) {
  let $nuevoLabel = document.createElement("label");
  // $resultado.appendChild($nuevoLabel);
  $nuevoLabel.classList.add("nuevo-label");
  $nuevoLabel.textContent = `familiar nro ${i}`;
  return $nuevoLabel;
}

function meterCosas() {
  inputMayor.value = calcularMayor(edades);
  inputMenor.value = calcularMenor(edades);
  inputPromedio.value = calcularPromedio(edades);
}
function crearIntegrantes(i) {
  const $nuevoDiv = document.createElement("div");
  const $br = document.createElement("br");
  const $nuevoLabel = document.createElement("label");
  const $nuevoInput = document.querySelector("input");
  $nuevoLabel.classList.add("nuevo-label");
  $nuevoLabel.textContent = `familiar nro ${i}`;
  $nuevoInput.classList.add("nuevo-input");
  $nuevoDiv.appendChild($nuevoLabel);
  $nuevoDiv.appendChild($br);
  $nuevoDiv.appendChild($nuevoInput);
  $resultado.appendChild($nuevoDiv);

  // crearLabel(i);
  // nuevoDiv.appendChild($nuevoLabel);
  // crearInput(i);
  // nuevoDiv.appendChild($nuevoInput);
  // $resultado.appendChild(nuevoDiv);
}
function mostrarRespuesta() {
  $divRespuesta.classList.remove("oculto");
}
function tomarValorinputs() {
  let valorInput = document.querySelectorAll(".nuevo-input");
  for (let x = 0; x < valorInput.length; x++) {
    edades.push(Number(valorInput[x].value));
  }
}
