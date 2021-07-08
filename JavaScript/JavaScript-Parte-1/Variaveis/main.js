console.log("Hello World!");
let myName = "Lucas";
console.log(myName);

// {
//   var issoEhUmEscopoLocal;
// }

// var Sao declarações de Escopo Global, ou escopo de funções
// Enquanto let e const são de escopo bloqueados

// let podem ser atualizadas, mas const não podem ser atualizadas ou re-atribuídas.

// var e let podem ser declaradas, sem inicializar, enquanto const deverá obrigatoriamente ser inicializada ao declarar

let myLastName;
myLastName = "Rachid";
console.log(myLastName);

const myLastName2 = "Rachid";
console.log(myLastName2);

var myLastName3;
myLastName3 = "Silva";
console.log(myLastName3);

// Por conta do Ecma script 6, o ideal é que utilize somente let e const, para que o codigo nao fique vunerável a erros.
