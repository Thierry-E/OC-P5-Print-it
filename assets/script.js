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
    index = slides.lenght - 1
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

slides.forEach((slide, index) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (index === 0) {
    dot.classList.add('dot_selected')
  }
  dots_container.appendChild(dot)
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
}

// /*** Automatiser le carrousel ***/

/*** Passage automatique à l'image suivante***/
function autoSlide() {
  index++
  if (index >= slides.length) {
    index = 0
  }
  banner()
}

/*** Création d'un intervalle régulier***/
function startCarousel() {
  banner() // Affiche la première diapositive
  setInterval(autoSlide, 5000) // Change de diapositive toutes les 3 secondes
}

/*** Lancement de l'automatisation du caroussel au chargement de la page***/
window.addEventListener('load', () => {
  startCarousel()
})
