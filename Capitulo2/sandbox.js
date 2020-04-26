/*
alert ('hello,world'); */
/*
console.log(1);
console.log(2);*/

//let age= 25;
//let year = 2020;
//console.log(age,year);

//age=30;
//console.log(age);

//const points=100;
//console.log(points)

//var score=75;
//console.log(score); 

// strings

console.log('hello, world,Bienvenido a Programación Web,Este esta Personalizado');

let email = 'mario@thenetninja.co.uk';
let email2 = 'L17390748@chetumal.tecnm.mx';

console.log(email,email2);

// string concatenation
let firstName = 'Sergio';
let lastName = 'Pech';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);


// common string methods- Otro Ejemplo del video.

let email3 = 'L17390748@chetumal.tecnm.mx/ Ejemplo';

//let result = email.lastIndexOf('n');

//let result = email.slice(0,5);

//let result = email.substr(5,12);

//let result = email.replace('m', 'w');

let result2 = email3.replace('n', 'w');

console.log(result2);

// numbers-Otro ejemplo

let radius = 10;
let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

let result4 = 'The blog has/ El blog tiene ' + likes + ' likes.';
console.log(result4);


// template strings- Otro ejemplo
const title = 'Las Mejores Peliculas';
const author = 'Sergio';
const likess = 30;

//concatenation way/Ejemplos

let result6 = 'The blog called ' + title + ' by ' + author + ' has ' + likess + ' likess';
console.log(result6);

//template string way/Ejemplos

let result7 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result7);

// creating html templates 
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has/El Blog tiene ${likess} likes</span>
`;

console.log(html);

// arrays/Otro Ejemplo

let ninjas = ['shaun', 'ryu', 'chun-li'];

 ninjas[1] = 'ken';
 console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// array length
// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let result8 = ninjas.push('ken');
let result9 = ninjas.pop();

console.log(result8);
console.log(ninjas);


//Otro ejemplo

// booleans & comparisons
//console.log(true, false, 'true/Verdadero', 'false/Falso');

// methods can return booleans

//let email4 = 'Jose@thenetninja.co.uk';
//let names3 = ['Sergio', 'Jose', 'toad'];

//let result10 = email4.includes('@');
//let result11 = names3.includes('luigi');

//console.log(result11);

// comparison operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'sergio';

console.log(name == 'sergio');
console.log(name == 'Sergio');
console.log(name > 'crystal');
console.log(name > 'sergio');
console.log(name > 'crystal');



//Otro ejemplo del video

//let age = 25;

// loose comparison (different types can still be equal)

//console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//Otro Ejemplo

// type conversion
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('Hola como estas?');
//let result12 = String(50);
// let result12 = Boolean(100);
// let result12 = Boolean(0);
// let result12 = Boolean('0');
let result13 = Boolean('');

console.log(result13, typeof result13);