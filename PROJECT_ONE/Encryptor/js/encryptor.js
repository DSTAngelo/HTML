// Funcion Saltar Linea

function saltarLinea() {
  document.write("<br><br>");
}

//Funcion imprimir datos

function imprimir(frase) {
  document.write(frase);
  saltarLinea();
}

//Limpiar Caja Uno

function limpiarCaja(caja) {
  var content;
  content = document.getElementById(caja).value = "";
}

// Funcion Copy

function copyToClipBoard() {
  var content = document.getElementById("respuesta");
  content.select();
  document.execCommand("copy");
  alert("Texto Copiado!");
  limpiarCaja("respuesta");
  window.location.reload();
}

//Funcion Encryptar

function encryptor() {
  var frase = "";
  //frase = prompt("Escribe una frase");
  frase = document.getElementsByTagName("input")[0].value;
  frase = frase
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  console.log(frase);

  document.getElementById("respuesta").innerHTML = frase;
  limpiarCaja("caja_uno");
}

// Funcion Desencryptar

function decryptor() {
  var frase = "";
  //frase = prompt("Escribe una frase");
  frase = document.getElementsByTagName("input")[0].value;
  frase = frase
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  console.log(frase);
  document.getElementById("respuesta").innerHTML = frase;
}


