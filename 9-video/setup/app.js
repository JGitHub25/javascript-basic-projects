// MDN
// The DOMContentLoaded event fires when the initial HTML document
// has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Botón para play/pause el video
let video = document.querySelector(".video-container");

let botonSwitch = document.querySelector(".switch-btn");

botonSwitch.addEventListener("click", function () {
  botonSwitch.classList.toggle("slide");

  if (botonSwitch.classList.contains("slide")) {
    video.pause();
  } else {
    video.play();
  }
});

// Ocultar gif preloader una vez todo ha cargado.
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hide-preloader");
});
