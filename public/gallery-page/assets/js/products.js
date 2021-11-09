const gallery = [
    {
      id: 1,
      title: 'Table Lamp',
      description: 'photo of a table lamp',
      imageSrc: '../assets/images/Furnitures/table-lamp.jpg',
      width:'450',
      height:'300',
      category:'Lighting',
    },
    {
      id: 2,
      title: 'Floor Lamp',
      description: 'Photo of a floor lamp',
      imageSrc: '../assets/images/Furnitures/floor-lamp.jpg',
      width:'450',
      height:'300',
      category: 'Lighting',
    },
    {
      id: 3,
      title: 'Hanging Lamp',
      description: 'photo of a hanging lamp',
      imageSrc:'../assets/images/Furnitures/hanging-lamp.jpg',
      width: '450',
      height:'300',
      category:'Lighting',
    },
    {
      id: 4,
      title: 'Samsung Small TV',
      description: 'photo of a small samsung tv',
      imageSrc:'../assets/images/Furnitures/sm-tv.jpg',
      width:'450',
      height:'300',
      category: 'TV',
    },
    {
      id: 5,
      title: 'Samsung Medium TV',
      description: 'photo of a medium tv',
      imageSrc:'../assets/images/Furnitures/md-tv.jpg',
      width:'450',
      height:'300',
      category: 'TV',
    },
    {
      id: 6,
      title: 'Samsung Large TV',
      description: 'photo of large tv',
      imageSrc:'../assets/images/Furnitures/lg-tv.jpg',
      width:'450',
      height:'300',
      category: 'TV',
    },
    {
      id: 7,
      title: 'Vegan Leather Sofa'  ,
      description: 'Photo of Vegan Leather Sofa beside the window' ,
      imageSrc:'../assets/images/Furnitures/VeganLeatherSofa.jpg',
      width:'450',
      height:'300',
      category: 'Sofa',
    },
    {
      id: 8,
      title: 'Fabric Sofa',
      description:'Photo of Fabric sofa with a cat on it',
      imageSrc:'../assets/images/Furnitures/FabricSofa.jpg',
      width:'450',
      height:'300',
      category: 'Sofa',
    },
    {
      id: 9,
      title: 'Leather Sofa',
      description:'Photo of Leather sofa',
      imageSrc:'../assets/images/Furnitures/leatherSofa.jpg',
      width:'450',
      height:'300',
      category: 'Sofa',
    },
    {
      id: 10,
      title:'Round Oak Table',
      description:'photo of a round oak table',
      imageSrc: '../assets/images/Furnitures/OakCoffeeTable.jpg',
      width:'450',
      height:'300',
      category: 'coffee table',
    },
    {
      id: 11,
      title: 'Cherry Coffee Table',
      description: 'photo of a cherry coffee table with a laptop',
      imageSrc: '../assets/images/Furnitures/CherryCoffeeTable.jpg',
      width:'450',
      height:'300',
      category: 'coffee table',
    },
    {
      id: 12,
      title: 'Pine Coffee Table',
      description: 'photo of a pine coffee table',
      imageSrc:'../assets/images/Furnitures/MahohganyTable.jpg',
      width:'450',
      height:'300',
      category: 'coffee table',
    }
    ]
    
    let output = "";
    gallery.forEach((products) => {
        output += `
        <figure>
        <img src="${products.imageSrc}" alt="${products.description}" width="450">
        <figcaption>${products.title}</figcaption>
        </figure>
        `
      })

      document.querySelector('.output').innerHTML = output;