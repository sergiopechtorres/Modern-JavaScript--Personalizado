// object literals- Ejemplo 1

let user = {
    name: 'crystal',
    age: 25,
    email: 'crystal@chetumal.tecnm.mx',
    location: 'Chetumal',
    blogs: ['Chetumal es una ciudad mexicana, capital del estado de Quintana Roo y cabecera del municipio de Othón P. Blanco.']
  };
  
  console.log(user);
  console.log(user.age);
  
  user.age = 35;
  console.log(user.age);
  
  console.log(user['name']);
  user['name'] = 'Cristina';
  console.log(user['name']);
  
  console.log(typeof user);

  // object literals Ejemplo2

let user2 = {
    name2: 'cristina',
    age: 20,
    email: 'cristina@chetumal.tecnm.mx',
    location: 'Chetumal',
    blogs: ['Chetumal es una ciudad mexicana', 'se ubica en la península de Yucatán a orillas de la Bahía de Chetumal, en las coordenadas 18°30′13″N 88°18′19″O.'],
    login: function(){
        console.log('Ejemplo 2');
      console.log('La usuario inició sesión');
    },
    logout: function(){
      console.log('La usuario cerró la sesión');
    },
    logBlogs: function(){
      // access the blogs here
    }
  };
  
  user2.login();
  user2.logout();
  
  const name2 = 'Cristina 2';
  name2.toUpperCase();


  // object literals- Ejemplo 3

let user3 = {
    name: 'Mario',
    age: 30,
    email: 'Mario@outlook.com',
    location: 'berlin',
    
    blogs: ['Ejemplo 3---why mac & cheese rules', '10 things to make with marmite'],
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('this user has written these blogs:');
      this.blogs.forEach(blog => {
        console.log(blog);
      })
    }
  };
  
  // console.log(this);
  user3.logBlogs();


//Aqui Empieza el Ejemplo 4
  // const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs[0].title);

let user4 = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
      {title: 'Ejemplo 4--Por qué las reglas de mac & cheese', likes: 30},
      {title: '10 cosas para hacer con marmite', likes: 50}
    ],
    login(){
      console.log('La usuario inició sesión');
    },
    logout(){
      console.log('La usuario cerró la sesión');
    },
    logBlogs(){
      // access the blogs here
      // console.log(this);
      console.log('Esta usuaria ha escrito estos blogs:');
      this.blogs.forEach(blog => {
        console.log(`${blog.title} has ${blog.likes} likes`);
      })
    }
  };
  
  // console.log(this);
  user4.logBlogs();



  // Math object -Ejemplo 5
console.log('Ejemplo 5');
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));



// primitive values-Ejemplo 6

let scoreOne = 21;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 50;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values- Ejemplo 6

userOne = { name: 'Brue Li', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'Jacky Chan';
console.log(userOne, userTwo);