function crearInput(i) {
  let nuevoInput = document.createElement("input");
  $resultado.appendChild(nuevoInput);
  nuevoInput.classList.add("nuevo-input");
  let br = document.createElement("br");
  $resultado.appendChild(br);
  return nuevoInput;
}
function crearLabel(i) {
  let nuevoLabel = document.createElement("label");
  $resultado.appendChild(nuevoLabel);
  nuevoLabel.textContent = `familiar nro ${i}`;
}
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
