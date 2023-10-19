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
let arrow_left = document.querySelector('.arrow_left')
arrow_left.addEventListener('click', () => {
  console.log("J'ai cliqué sur la flêche de gauche !")
  index--
  banner()
  slides()
})

let arrow_right = document.querySelector('.arrow_right')
arrow_right.addEventListener('click', () => {
  console.log("J'ai cliqué sur la flêche de droite !")
  index++
  banner()
  slides()
})

/***Etape 3 : Ajouts des bullet points***/
/*Création des bullet points*/
const dots = document.querySelector('.dots')

slides.forEach((slides, index) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (index === activeIndex) {
    dot.classList.add('dot_selected')
  }
  dots.appendChild(dot)
})

/****Etape 4 : Modifier le slide au clic sur le bouton ***/
const banner_Img = document.querySelector('.banner-img')
const banner_Txt = document.querySelector('#banner p')
console.log('banner_Img', banner_Img)
console.log('banner_Txt', banner_Txt)
function banner() {
  banner_Img.src = `./assets/images/slideshow/${slides[index].image}`
  banner_Txt.innerHTML = slides[index].tagLine
  update_Dots()
}
console.log('slides', slides)

/****Etape 5 : Mise à jour des bullet dots***/
const dot = document.querySelectorall('.dots .dot')
function update_Dots() {
  console.log('dot', dot)
  console.log('index', index)
  dots.forEach((dot, indexdot) => {
    if (indexdot === index) {
      dot.classList.add('dot_selected')
    } else {
      dot.classList.remove('dot_selected')
    }
  })
}
