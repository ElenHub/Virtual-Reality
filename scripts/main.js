/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
       navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
       })
      }
      if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
      }
      /*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

   /*==================== SHOW SCROLL UP ====================*/
const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top')
    this.scrollY >= 800 ? scrollTop.classList.add('show-scroll')
        : scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__cont, .img__cont, .clients__items, .explore__container`)
sr.reveal(`.reality__cont, .culture__items`, { interval: 100 })
sr.reveal(`.game__img-cont, .culture__data`, { origin: 'left' })
sr.reveal(`.game__data, .culture__items`, { origin: 'right' })
