// Estrutura condicional
let num = 5;

if (num === 1) {
  console.log(num + " é igual a 1");
} else if (num === 2) {
  console.log(num + " é igual a 2");
} else {
  console.log(num + " é diferente de 1 e de 2");
}

// Switch/Case
let mes = "abril";

switch (mes) {
  case "fevereiro":
    console.log("mes 02");
    break;
  case "março":
    console.log("mes 03");
    break;
  case "janeiro":
    console.log("mes 01");
    break;

  default:
    console.log("Nem um dos casos acima atendidos");
}
