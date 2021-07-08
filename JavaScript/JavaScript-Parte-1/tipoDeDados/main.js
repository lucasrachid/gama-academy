let myName = "string"; // Texto

let age = 25; // Number, não há a diferença no JS de float e Int, os dois se tratam do tipo Number

let height =
  1.71 / //number;
  null; // Objeto vazio, que não possui dados, pode ser atribuído a variáveis

undefined; // Um dado que não foi definido

let isStudent = true; // Tipo boolean, só retorna se é true ou false

// Objeto, array e function

//OBJETO
let person = {
  name: "Rachid",
  age: 25,
  height: 1.71,
};

console.log(person);

//ARRAY ou VETORES
let students = ["Rachid", "Lucas", "Martins", "Mylene"];

//Function
//Quase igual Objeto, porém tem a capacidade de ser executado
function sum(a, b) {
  return a + b;
}

//Operador Typeof para identificar o tipo primitivo do dado

console.log(typeof "Rachid");
console.log(typeof age);
console.log(typeof isStudent);

let object = null; //null é object
console.log(typeof object);

function sum() {
  return 5 + 2;
}
console.log(typeof sum);
