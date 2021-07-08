let colors = ["red", "blue", "orange", "white", "yellow", "green"];
// As arrays se iniciam no indice 0, por exemplo acima temos 6 cores, entao ficaria 0, 1, 2, 3, 4, 5

// O for, você irá definir primeiro uma variável de Inicio, depois uma de fim e por ultimo uma de passo.
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//Mesma coisa do exemplo acima
for (let i = 0; i < 6; i++) {
  console.log(colors[i]);
}

//Se eu quero pegar do indice 0 até o indice 5, devo colocar o numero 6, ele conta sempre um a menos.

for (let i = 0; i <= 10; i++) {
  //vai contar de 1 até 10.
  console.log(i);
}

// While
let i = 0;

while (i <= 10) {
  console.log(i++);
}

let j = 20;

do {
  console.log(j++);
} while (j <= 30);
