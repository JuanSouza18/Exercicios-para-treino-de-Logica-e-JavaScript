let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");

// fazendo a conversão de string para número
altura = parseFloat(altura);
peso = parseFloat(peso);

function calculoIMC(peso, altura) {
    return peso / (altura *altura);
}

const imc = calculoIMC(peso, altura);
console.log("Seu IMC é: " + imc.toFixed(2));   