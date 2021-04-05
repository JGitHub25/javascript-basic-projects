// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

function esconderMostrar() {
  document.querySelector(".links").classList.toggle("show-links");
}

document
  .querySelector(".nav-toggle")
  .addEventListener("click", esconderMostrar);
