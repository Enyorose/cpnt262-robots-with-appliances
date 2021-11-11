
fetch('https://robot-design.herokuapp.com/api/member')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(item){
    let output = ''
    teamMembers.forEach((item) => {
      output += 
        `<figure>
          <h2 class="title">${item.fullName}</h2>
            <img src="${item.profilePic}" alt="${item.description}"></img>
          <figcaption>
            <p>${item.bio}</p>
            <a class="author" href="${item.github}" target="_blank">
            <i class="fab fa-github"></i>
            </a>
          </figcaption>
        </figure>`
        
    })
    const team = document.querySelector('.members')
    team.innerHTML = output
    console.log(item)
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    const error = document.querySelector('.error')
    error.innerHTML = `
    <h1>Turn back this page is not available</h1>
    <h2>404 Page not found</h2>
    `
  });

