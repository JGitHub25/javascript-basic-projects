//using selectors inside the element
// const preguntas = document.querySelectorAll(".question");

// preguntas.forEach(function(elem){
//     const boton = elem.querySelector(".question-btn")
//     boton.addEventListener("click", function(){
//         elem.classList.toggle("show-text")
//     })
//     if (elem!==)
//     console.log(boton)
// })

// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (pepapig) {
    const question = pepapig.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});
