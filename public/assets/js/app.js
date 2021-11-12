const hamburgerMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')
const navList = document.querySelector('.nav-list')
const openMenu = document.querySelector('.nav-list-open')

hamburgerMenu.addEventListener('click', () => {
  navList.classList.add('nav-list-open')
})

closeMenu.addEventListener('click', () => {
  navList.classList.remove('nav-list-open')
})