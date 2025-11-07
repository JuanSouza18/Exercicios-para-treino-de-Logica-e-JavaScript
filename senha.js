const senha = 7489325;
let tentativa = 0;
const maxTentativas = 3;

while ( tentativa < maxTentativas) {
    const entrada = prompt("Digite a senha de acesso, ela possui 7 dígitos:");
    if (parseInt(entrada) === senha) {
        console.log("Entrada permitida. Bem-vindo!");
        break;
    }
    else {
        tentativa++;
        if (tentativa === maxTentativas) {
            console.log("Entrada Negada, Número máximo de tentativas excedido.");
        } else {
            console.log(`Senha incorreta. Você tem mais ${maxTentativas - tentativa} tentativas.`);
    }
    }
}


