let idade = prompt("Digite sua idade :");
idade = parseInt(idade);

let peso = prompt("Digite seu peso em kg:");
peso = parseFloat(peso);

if (idade >= 16 && idade <= 69 && peso >= 50) {
    console.log("Voce está apto a doar sangue.");
}
else {
    console.log("Voce não está apto a doar sangue.");
}