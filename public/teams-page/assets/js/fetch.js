const teamMembers = [
  {
    name: 'Jessica Watson',
    profilePic:'',
    description:'photo of jessica watson',
    title: 'Project coordinator',
    bio: 'I am a mom of a wonderful boy as well as a photographer and an aspiring web developer.',
    github: ''
  },
  {
    name: 'David Ha',
    profilePic:'',
    description: 'photo of david ha',
    title: 'Front End Specialist',
    bio: 'Automotive RS Journeyman -> DJ -> Gamer -> Web Developer??',
    github: 'https://github.com/boostha'
  },
  {
    name: 'Jared Herman',
    profilePic:'',
    description:'photo of jared herman',
    title: 'Data Manager',
    bio: 'Front end and back end Web Developer',
    github: 'https://github.com/jaredherman'
  },
  {
    name: 'John paul Adobas',
    profilePic: '',
    description: 'photo of john paul abodas',
    title: 'Front End JS Expert',
    bio: '',
    github: 'https://github.com/jaypee06'
  }
]

teamMembers.forEach((item) => {
  output += 
    `<figure>
      <h2 class="title">${item.name}</h2>
        <img src="${item.profilePic}" alt="${item.description}"></img>
      <figcaption>
        <a class="author" href="${item.creditURL}">
          <span>${item.credit}</span>
        </a>
      </figcaption>
    </figure>`
  
})