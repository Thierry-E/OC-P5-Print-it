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

let index = 0

function banner() {
  const banner_Img = document.querySelector('.banner-img')
  const banner_Txt = document.querySelector('#banner p')
  banner_Img.src = `./assets/images/slideshow/${slides[index].image}`
  banner_Txt.innerHTML = slides[index].tagLine
  updateDots()
}

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

// Écouteurs d'événements pour les flèches
const arrowLeft = document.querySelector('.arrow_left')
arrowLeft.addEventListener('click', () => {
  console.log("J'ai cliqué sur la flèche de gauche !")
  index--
  if (index < 0) {
    index = slides.length - 1
  }
  banner()
})

const arrowRight = document.querySelector('.arrow_right')
arrowRight.addEventListener('click', () => {
  console.log("J'ai cliqué sur la flèche de droite !")
  index++
  if (index >= slides.length) {
    index = 0
  }
  banner()
})

// Création des bullet points
const dotsContainer = document.querySelector('.dots')
slides.forEach((slide, index) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  if (index === 0) {
    dot.classList.add('dot_selected')
  }
  dotsContainer.appendChild(dot)
})

banner() // Affiche la première image et les bullet points au chargement de la page
