const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const boton = document.getElementById("btn");
const nombreColor = document.querySelector(".color");

function colorHex() {
  let colorRandom = ["#"]; // En vez de hacer esta variable un array, él la hizo una string. Mejor: se ahorraba el .join("").

  for (let i = 0; i < 6; i++) {
    colorRandom.push(hex[Math.floor(Math.random() * hex.length)]);
  }
  let stringColor = colorRandom.join("");

  document.body.style.backgroundColor = stringColor;
  nombreColor.innerHTML = stringColor;
}

boton.addEventListener("click", colorHex);
