let respuestaCorrecta = "perro";

function reproducirSonido() {
  const audio = document.getElementById("sonidoAnimal");
  audio.currentTime = 0;
  audio.play();
  document.getElementById("resultado").textContent = "";
}

function verificarRespuesta(respuesta) {
  const resultado = document.getElementById("resultado");
  if (respuesta === respuestaCorrecta) {
    resultado.textContent = "¡Correcto, bien hecho!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Ups, intenta otra vez, estas cerca!!";
    resultado.style.color = "red";
    ayuda.textContent = "Te doy una pista, es el mejor amigo del hombre :)"; 

}
}
