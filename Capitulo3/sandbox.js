//Junte todos los ejemplos en uno solo para que no sean muchos arhivos por enviar.
// for loops

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

//console.log('loop finished');

const names = ['Sergio', 'Jose', 'Itzel'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// while loops/Otro ejemplo
const namess = ['Sergio', 'Jose', 'Itzel'];
let i = 0;

// while(i < 5){
//   console.log('loop: ', i);
//   i++;
// }

 while(i < namess.length){
console.log(names[i]);
   i++;
 }

i = 8;
while(i > 5){
  console.log('loop: ', i);
  i--;
}

// do while loops/Otro ejemplo
let a = 3;

do{
  console.log('val of a is: ', a);
  a++;
} while(a < 5);

// if statements // Otro Ejemplo
// const age = 25;

// if(age > 20){
//   console.log('tienes más de 21 años');
// }

// const ninjas = ['Jose', 'ryu', 'chun-li', 'Sergio'];

// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas!");
// }

const password = 'p@ssword';

if(password.length >= 8){
  console.log('Esa contraseña es lo suficientemente larga');
}

const passwordd = 'p@ss';

if(passwordd.length <= 8){
  console.log('Esa contraseña no  es lo suficientemente larga');
}

// else if statements// Otro ejemplo
const password3 = 'p@sswordsergio';

if(password3.length >= 12){
  console.log('Esa contraseña es muy fuerte');
} else if(password3.length >= 8){
  console.log('Esa contraseña es lo suficientemente larga');
} else {
  console.log('La contraseña debe tener al menos 8 caracteres de longitud');
}

// logical operators -  OR || and AND && // Otro Ejemplo
const password4 = 'p@ss12itchetumal';

if(password4.length >= 12 && password4.includes('@')){
  console.log('that password is mighty strong/esa contraseña es muy fuerte');
} else if(password4.length >= 8 || password4.includes('@') && password4.length > 5){
  console.log('that password is strong enough/esa contraseña es lo suficientemente segura');
} else {
  console.log('that password is not strong enough/esa contraseña no es lo suficientemente segura');
}

// Logical NOT -- Otro Ejemplo
const user = false;

if(!user){
  // do something
  console.log('you must be logged in to continue/Usted debe haber iniciado sesión para continuar');
}

console.log(!true);
console.log(!false);


// break & continue / Otro Ejemplo
const scores = [40, 25, 0, 35, 10, 60, 11];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }

  console.log('your score:', scores[i]);

  if(scores[i] === 100){
    console.log('congrats, you got the top score!,felicidades, obtuviste el puntaje más alto!');
    break;
  }

}

// switch statements / Otro Ejemplo
const grade = 'B';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got a B--SERGIO!');
    break;
  case 'C':
    console.log('you got a C!');
    break;
  case 'D':
    console.log('you got a D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}

// using if statements // 
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){

// } else if(grade === 'E'){

// } else {

// }


// variables & block scope / Otro Ejemplo
let age = 21;

if(true){

  // age = 40;
  let age = 21;
  let name = 'Sergio';
  console.log('inside 1st code block:,Dentro del primer bloque de código:', age, name);

  if(true){

    let age = 50;
    console.log('inside 2nd code block:,Dentro del segundo bloque de código:', age, name);

  }

}

console.log('outside code block:,Bloque de código externo:', age, name);