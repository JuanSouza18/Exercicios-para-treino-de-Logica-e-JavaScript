// cria a variavel contator 
let conts = 0;

// cria as variaveis maior e menor
let maior = null;
let menor = null;
let numero = parseInt(prompt("Digite um número : "));

// enquanto o numero for diferente de 0
while (numero !== 0) {
    conts++;
    if (maior === null || numero > maior) {
        maior = numero;
    }
    if (menor === null || numero < menor) {                 
        menor = numero;
    }
    numero = parseInt(prompt("Digite um número (0 para sair): "));
}
console.log("Quantidade de números digitados: " + conts);
console.log("Maior número digitado: " + maior); 
console.log("Menor número digitado: " + menor);
