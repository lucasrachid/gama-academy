let elementos = [];
let topo = -1;
const MAX = 10;

function push(num) {
  if (topo < MAX) {
    topo += 1;
    elementos[topo] = num;
  } else {
    console.log("Pilha esta cheia");
  }
}

function estaVazia() {
  return topo == -1;
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo];
    topo -= 1;
    return num;
  } else {
    console.log("Pilha está vazia");
  }
}

// Parte do código que utiliza a pilha //

// push(10);
// push(20);
// push(30);

// console.log(elementos);

// console.log(pop());
// console.log(pop());
// console.log(pop());

// Divisao //
// 10 / 2
// 0    5  / 2
//      1    2  / 2
//           0  / 1 / 2
//                1   0

let numDecimal = 10;
let resto;

console.log("Hora de empilhar...");

while (numDecimal != 0) {
  resto = parseInt(numDecimal) % 2;
  push(resto);
  console.log(resto);
  numDecimal = parseInt(numDecimal / 2);
}

console.log("Desempilhando tudo....");
while (!estaVazia()) {
  console.log(pop());
}
