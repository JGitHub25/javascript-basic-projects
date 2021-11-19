const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  //Estos dos últimos los agregué inventados para ver cómo salían los botones dinámicos. Repiten info de los otros platos.
  {
    id: 10,
    title: "quarantine buddy",
    category: "desayuno",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 1,
    title: "quarantine buddy",
    category: "jugo",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//Declaraciones
const seccionMedio = document.querySelector(".section-center");

function arrayPlatosAHtml(arr) {
  let menuFiltrado = arr.map(function (plato) {
    return `<article class="menu">
    <img src=${plato.img} class="photo" alt=${plato.title}>
    <div class="item-info">
      <header>
        <h4>${plato.title}</h4>
        <h4 class="price">$${plato.price}</h4>
      </header>
      <p class="item-text">
        ${plato.desc}
      </p>
    </div>
  </article>`;
  });
  menuFiltrado = menuFiltrado.join("");
  seccionMedio.innerHTML = menuFiltrado;
}

function creaBotones(arr) {
  let categorías = [];

  for (let x = 0; x < arr.length; x++) {
    if (!categorías.includes(arr[x].category)) {
      categorías.push(arr[x].category);
    }
  }

  let htmlBotones = categorías.map(function (x) {
    return `<button class="filter-btn" type="button" data-grupo=${x}>${x}</button>`;
  });

  htmlBotones =
    "<button class='filter-btn' type='button' data-grupo='all'>all</button>" +
    htmlBotones.join("");
  document.querySelector(".btn-container").innerHTML = htmlBotones;
}

//Ejecuciones
//Creo los botones dinámicamente
window.addEventListener("DOMContentLoaded", function () {
  creaBotones(menu);

  //Referencio los botones ya creados
  const botones = document.querySelectorAll(".filter-btn");

  //Les pongo un eventListener a los botones
  botones.forEach(function (btn) {
    btn.addEventListener("click", function (wtf) {
      const tipoDeComida = wtf.currentTarget.dataset.grupo;
      let platosAMostrar;

      if (tipoDeComida === "all") {
        platosAMostrar = menu;
      } else {
        platosAMostrar = menu.filter(function (plato) {
          return plato.category === tipoDeComida;
        });
      }
      arrayPlatosAHtml(platosAMostrar);
    });
  });
});

//Muestro los platos dinámicamente -Al inicio todos
window.addEventListener("DOMContentLoaded", function () {
  arrayPlatosAHtml(menu);
});
