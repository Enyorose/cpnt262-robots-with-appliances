// 1. Create an empty output variable
let output = '';
const container = document.querySelector('.single-item');

// 2. Retrieve the character ID from the URL
const url = new URL(window.location);
console.log(url);
const params = new URLSearchParams(url.search);
console.log(params.get('id'));

// 3. fetch() the character data
fetch(`https://robot-design.herokuapp.com/api/images/${params.get('id')}`)
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(gallery){
    // Any code that depends on the `data` must go in this block
    let output = " ";
    gallery.forEach((products) => {
        output += `
        <figure>
        <img src="${products.imageSrc}" alt="${products.description}" width="450">
        <figcaption>${products.title}</figcaption>
        </figure>
        `
      })

    // 4. In the last .then(), display the character
    container.innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });