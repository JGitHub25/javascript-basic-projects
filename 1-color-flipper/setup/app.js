const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const boton = document.getElementById("btn");
const nombreColor = document.querySelector(".color");

boton.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 4);

  document.body.style.backgroundColor = colors[randomNumber];
  nombreColor.innerHTML = colors[randomNumber];
});
