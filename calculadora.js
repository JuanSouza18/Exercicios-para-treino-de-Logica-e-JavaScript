let num1 = prompt("Digite o primeiro número:");
num1 = parseFloat(num1);

let num2 = prompt("Digite o segundo número:");
num2 = parseFloat(num2);

let operação = prompt("Digite a operação desejada (+, -, *, /):");

function calcular(num1, num2, operação) {
    switch (operação) {
        case '+' :
            return num1 + num2 
      case '-':
        return num1 - num2;

        case '*':
        return num1 * num2;

        case '/':
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Erro: Divisão por zero não é permitida.";
        }
        default:
        return "Erro: Operação inválida.";
    }
 } 
const resultado = calcular(num1, num2, operação);
console.log("O resultado da operação é: " + resultado);