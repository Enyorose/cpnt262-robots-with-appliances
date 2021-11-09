const teamMembers = [
  {
    name: 'Jessica Watson',
    profilePic:'',
    title: 'Project coordinator',
    bio: 'I am a mom of a wonderful boy as well as a photographer and an aspiring web developer.',
    github: ''
  },
  {
    name: 'David Ha',
    profilePic:'',
    title: 'Front End Specialist',
    bio: 'Automotive RS Journeyman -> DJ -> Gamer -> Web Developer??',
    github: 'https://github.com/boostha'
  },
  {
    name: 'Jared Herman',
    profilePic:'',
    title: 'Data Manager',
    bio: 'Front end and back end Web Developer',
    github: 'https://github.com/jaredherman'
  },
  {
    name: 'John paul Adobas',
    profilePic: '',
    title: 'Front End JS Expert',
    bio: '',
    github: 'https://github.com/jaypee06'
  }
]

teamMembers.forEach((picture) => {
  output += 
    <figure>
      <h2 class="title">${picture.title}</h2>
      <a href="${picture.linkURL}">
        <img src="${picture.pathURL}" alt="${picture.description}" width="${picture.width}" height="${picture.height}"></img>
      </a>
      <figcaption>
        <a class="author" href="${picture.creditURL}">
          <span>${picture.credit}</span>
        </a>
      </figcaption>
    </figure>
  
})