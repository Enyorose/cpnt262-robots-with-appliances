fetch('https://robot-design.herokuapp.com/api/images')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(gallery){
    let output = " ";
    gallery.forEach((products) => {
        output += `
        <figure>
        <img src="${products.imageSrc}" alt="${products.description}" width="450">
        <figcaption>${products.title}</figcaption>
        </figure>
        `
      })

      document.querySelector('.output').innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    const error = document.querySelector('.error')
    error.innerHTML = `
    <h1>Turn back this page is not available</h1>
    <h2>404 Page not found</h2>
    `
  });

  fetch('https://robot-design.herokuapp.com/api/images/:id')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(gallery){
    let output = " ";
    gallery.forEach((products) => {
        output += `
        <figure>
        <img src="${products.imageSrc}" alt="${products.description}" width="450">
        <figcaption>${products.title}</figcaption>
        </figure>
        `
      })

      document.querySelector('.single-item').innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    const error = document.querySelector('.error')
    error.innerHTML = `
    <h1>Turn back this page is not available</h1>
    <h2>404 Page not found</h2>
    `
  });

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


    
   