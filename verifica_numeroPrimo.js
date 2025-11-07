// pede ao usuário para inserir um número inteiro
let numero = prompt("Insira um número inteiro:");
numero = parseInt(numero);

// verifica se o número é primo
if ( numero <= 1) {
    console.log("Não é um número primo.");
}
else {
    // verifica se o número é divisível por algum número entre 2 e a raiz quadrada do número
    let ehPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    // exibe o resultado
    if (ehPrimo) {
        console.log("É um número primo.");
    } else {
        console.log("Não é um número primo.");
    }
}