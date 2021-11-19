function esconderMostrar() {
  document.querySelector(".sidebar").classList.toggle("show-sidebar");
}

let botones = document.querySelectorAll("button");
botones.forEach((element) => {
  element.addEventListener("click", esconderMostrar);
});
