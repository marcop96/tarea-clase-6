function crearLabel(x) {
    const $nuevoLabel = document.createElement("label");
    const $formIntegrantes = document.querySelector("#edad-integrantes");
    $nuevoLabel.innerHTML = `Integrante familiar ${x} `;
    $nuevoLabel.htmlFor = x;
    $formIntegrantes.appendChild($nuevoLabel);
  }
  
  function crearInput(x) {
    const $nuevoInput = document.createElement("input");
    $nuevoInput.id = x;
    const $formIntegrantes = document.querySelector("#edad-integrantes");
  
    //   $nuevoInput.placeholder(`${x}`)
    $formIntegrantes.appendChild($nuevoInput);
  }
  
  function calcularMayor(edades) {
    let mayor = 0;
    for (let i = 0; i < edades.length; i++) {
      if (edades[i] >= mayor) {
        mayor = edades[i];
      }
    }
    return mayor;
  }

  


function calcularMenor(edades) {
    let menor = edades[0];
    for (let i = 0; i < edades.length; i++) {
      if (edades[i] <= menor) {
        menor = edades[i];
      }
    }
    return menor;
  }
  
  function calcularPromedio(edades) {
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
      suma += edades[i];
    }
    let promedio = suma / edades.length;
    return promedio;
  }

  function meterCosas(mayor, menor, promedio) {
    const inputMayor = document.querySelector("#mayor");
    const inputMenor = document.querySelector("#menor");
    const inputPromedio = document.querySelector("#promedio");
  
    inputMayor.value = mayor;
    inputMenor.value = menor;
    inputPromedio.value = promedio;
  }
  