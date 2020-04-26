//Puse Varios Ejemplos en uno solo archivo .js para que no seas muuchos archivos por separado por subir.
 //Funcionan correctamente , le cambie el nombre de algunas variables para que no exista algun problema 
 // al imprimir.

// function declaration// Ejemplo 1
function greet(){
    console.log('Hola Bienvenido a mi pagina');
  }
  
  // function expression
  const speak = function(){
    console.log('Buenos dias a Todos');
    console.log('Este es el primer Ejemplo :)');

  };
  
   greet();
  // greet();
  speak();

  // arguments & parameters/ Ejemplo 2

const speak2 = function(name = 'sergio', time = 'Dias'){
  console.log(`Buenos ${time}, ${name}!`);
};

speak2('Jose', 'Noches');
speak2();
speak2('Ingeniero , Este es el 2 Ejemplo');

// return statements/ 3 Ejemplo

const calcArea = function(radius){
    let area = 3.14 * radius**12;
    return area;
  }
  
  const area = calcArea(5);
  console.log('3 ejemplo/Calcular el Area de un Circulo');
  console.log('El area es:', area);
  
  // arrow functions

// regular function 4 Ejemplo
const calcArea2 = function(radius){
 return 3.14 * radius**2;
 }

// arrow function
//const calcArea3 = radius => 3.14 * radius**2;

//const area2 = calcArea3(5);
//console.log('area is:', area2);

// practise arrow functions /7 4 Ejemplo

const greet2 = function(){
 return 'hello, world';
}

const greet3 = () => 'Hola, Mundo este el 4 Ejemplo de Functions';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet2,greet3());
console.log(bill([10,15,30], 0.2));


// 5 Ejemplo
const name = 'VICTORIA';

// function

const greet5 = () => {
  return 'COMO ESTAS?, este es otro ejemplo';
};

let resultOne = greet5();
console.log(resultOne);



// method / 6 Ejemplo

let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & forEach
let people = ['mario', 'luigi', 'Sergio', 'Felipe', 'Jackie Chan'];

const logPerson = (person, index) => {
  console.log(`${index} - Hola ${person}`);
}
console.log('Este es 6 ejemplo');

//people.forEach(person => {
//console.log(`hello ${person}`);
//});

people.forEach(logPerson);

// get a reference to the 'ul' - 7 Ejemplo

const ul = document.querySelector('.peopl');

const peopl = ['Mario', 'Luigi', 'Sergio', 'Jose', 'Jet Li'];

let html = ``;

peopl.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;