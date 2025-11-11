let numero = prompt("Digite um numero :");

let horas = Math.floor(numero / 3600);
let minutos = Math.floor((numero % 3600) / 60);
let segundos = numero % 60;

console.log(`${horas} : ${minutos} : ${segundos}`);