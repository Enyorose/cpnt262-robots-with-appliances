const teamMembers = [
  {
    name: 'Jessica Watson',
    profilePic:'https://avatars.githubusercontent.com/u/90333235?s=400&u=ad61197220d6ab9bb8262187e342c3f4514f0da4&v=4',
    description:'photo of jessica watson',
    title: 'Project coordinator',
    bio: 'I am a mom of a wonderful boy as well as a photographer and an aspiring web developer.',
    github: 'https://github.com/Enyorose'
  },
  {
    name: 'David Ha',
    profilePic:'https://avatars.githubusercontent.com/u/90293527?v=4',
    description: 'photo of david ha',
    title: 'Front End Specialist',
    bio: 'Automotive RS Journeyman -> DJ -> Gamer -> Web Developer??',
    github: 'https://github.com/boostha'
  },
  {
    name: 'Jared Herman',
    profilePic:'https://avatars.githubusercontent.com/u/90302843?v=4',
    description:'photo of jared herman',
    title: 'Data Manager',
    bio: 'Front end and back end Web Developer',
    github: 'https://github.com/jaredherman'
  },
  {
    name: 'John paul Adobas',
    profilePic: 'https://avatars.githubusercontent.com/u/90332320?v=4',
    description: 'photo of john paul abodas',
    title: 'Front End JS Expert',
    bio: 'Aspiring full stack developer',
    github: 'https://github.com/jaypee06'
  }
]
let output = ''
teamMembers.forEach((item) => {
  output += 
    `<figure>
      <h2 class="title">${item.name}</h2>
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