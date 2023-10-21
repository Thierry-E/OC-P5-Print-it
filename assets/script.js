const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

/***Variables ***/
let index = 0

/*** Étape 2 : Ajouts des Event Listeners sur les flèches ***/
const arrow_left = document.querySelector('.arrow_left')
arrow_left.addEventListener('click', () => {
  console.log("J'ai cliqué sur la flêche de gauche !")
  index--
  if (index < 0) {
    index = slides.length - 1
  }
  banner()
})

const arrow_right = document.querySelector('.arrow_right')
arrow_right.addEventListener('click', () => {
  console.log("J'ai cliqué sur la flêche de droite !")
  index++
  if (index >= slides.length) {
    index = 0
  }
  banner()
})

/***Etape 3 : Ajouts des bullet points***/
/*Création des bullet points*/
const dots_container = document.querySelector('.dots')

const dots = [] //Création d'un tableau pour stocker les dots

slides.forEach((slide, index) => {
  const dot = document.createElement('a')
  dot.classList.add('dot')
  if (index === 0) {
    dot.classList.add('dot_selected')
  }

  /***Ajout d'un lien vers l'image sur les bullet points ***/
  dot.href = `./assets/images/slideshow/${slides[index].image}`

  dots.push(dot) //Ajout de chaque dot au tableau dots

  dots_container.appendChild(dot)
})

/***Ecoute d'un événement au click sur les bullets points ***/
dots.forEach((dot, indexDot) => {
  dot.addEventListener('click', (event) => {
    event.preventDefault() // Empêche le lien de suivre.
    index = indexDot // Mise à jour de l'index avec l'index du dot cliqué.
    banner() // Changez l'image dans la bannière.
  })
})

/****Etape 4 : Modifier le slide au clic sur le bouton ***/
const banner_Img = document.querySelector('.banner-img')
const banner_Txt = document.querySelector('#banner p')
console.log('banner_Img', banner_Img)
console.log('banner_Txt', banner_Txt)
function banner() {
  banner_Img.src = `./assets/images/slideshow/${slides[index].image}`
  banner_Txt.innerHTML = slides[index].tagLine
  updateDots()
}
console.log('slides', slides)

/****Etape 5 : Mise à jour des bullet dots***/
function updateDots() {
  const dots = document.querySelectorAll('.dots .dot')
  dots.forEach((dot, indexDot) => {
    if (indexDot === index) {
      dot.classList.add('dot_selected')
    } else {
      dot.classList.remove('dot_selected')
    }
  })

  //Actualise les liens href des dots, pointe vers la nouvelle images
  dots.forEach((dot, indexDot) => {
    dot.href = `./assets/images/slideshow/${slides[indexDot].image}`
  })
}

// // /*** Automatiser le carrousel ***/

// /*** Passage automatique à l'image suivante***/
// function autoSlide() {
//   index++
//   if (index >= slides.length) {
//     index = 0
//   }
//   banner()
// }

// /*** Création d'un intervalle régulier***/
// function startCarousel() {
//   banner() // Affiche la première diapositive
//   setInterval(autoSlide, 5000) // Change de diapositive toutes les 3 secondes
// }

// /*** Lancement de l'automatisation du caroussel au chargement de la page***/
// window.addEventListener('load', () => {
//   startCarousel()
// })
