const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
const nav = document.querySelector('nav')
const btnPrevMobile = document.querySelector('#btn-prev-mobile')
const btnNextMobile = document.querySelector('#btn-next-mobile')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const slides = document.querySelectorAll('.slide--1')

let activeSection = 1

const changeActiveSection = (action) => {
  if (action === 'increase') {
    if (activeSection === 3) activeSection = 1
    else activeSection++
  } else if ((action = 'decrease')) {
    if (activeSection === 1) activeSection = 3
    else activeSection--
  } else return
}

const updateSlides = () => {
  if (activeSection === 1) {
    slides.forEach((slide) => {
      slide.classList.remove('active-2')
      slide.classList.remove('active-3')
    })
  } else if (activeSection === 2) {
    slides.forEach((slide) => {
      slide.classList.add('active-2')
      slide.classList.remove('active-3')
    })
  } else if (activeSection === 3) {
    slides.forEach((slide) => {
      slide.classList.remove('active-2')
      slide.classList.add('active-3')
    })
  } else return
}

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active')
  nav.classList.toggle('active')
})

btnPrevMobile.addEventListener('click', () => {
  changeActiveSection('decrease')
  updateSlides()
})
btnNextMobile.addEventListener('click', () => {
  changeActiveSection('increase')
  updateSlides()
})
btnPrev.addEventListener('click', () => {
  changeActiveSection('decrease')
  updateSlides()
})
btnNext.addEventListener('click', () => {
  changeActiveSection('increase')
  updateSlides()
})
