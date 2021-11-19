let numeroContador = document.getElementById("value");
//En vez de ponerse a güevoniar recuperando el innerHTML de numeroContador cada vez, el simplemente crea una variable que empieza en 0
//y va actualizando. Mucho más simple y eficiente : Se ahorra todos los parseInt por ejemplo.

//También usa un objeto evento e. que ni idea al respecto.

function aumentar() {
  let numeroAumento = parseInt(numeroContador.innerHTML) + 1;
  numeroContador.innerHTML = numeroAumento;
}

function disminuir() {
  let numeroDisminucion = parseInt(numeroContador.innerHTML) - 1;
  numeroContador.innerHTML = numeroDisminucion;
}

document.querySelector(".aumentar").addEventListener("click", aumentar);
document.querySelector(".disminuir").addEventListener("click", disminuir);
document.querySelector(".reset").addEventListener("click", function () {
  numeroContador.innerHTML = 0;
});

function colorNumero() {
  if (parseInt(numeroContador.innerHTML) > 0) {
    numeroContador.style.color = "green";
  } else if (parseInt(numeroContador.innerHTML) < 0) {
    numeroContador.style.color = "red";
  } else if (parseInt(numeroContador.innerHTML) == 0) {
    numeroContador.style.color = "#222";
  }
}

var todosBotones = document.querySelectorAll(".btn");

todosBotones.forEach(function (elemento) {
  elemento.addEventListener("click", colorNumero);
});
