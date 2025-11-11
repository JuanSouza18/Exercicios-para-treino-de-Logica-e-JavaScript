// pede o nome do aliuno e suas notas 
let nome = prompt("Digite seu nome:");

let nota1 = prompt("Digite a primeira nota:");
nota1 = parseFloat(nota1);

let nota2 = prompt("Digite a segunda nota:");
nota2 = parseFloat(nota2);

let nota3 = prompt("Digite a terceira nota:");
nota3 = parseFloat(nota3);

let nota4 = prompt("Digite a quarta nota:");
nota4 = parseFloat(nota4);

// função para calcular a média das notas
function CalculoMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

// função para verificar se o aluno está aprovado ou reprovado
function VerificaAprovacao(media) {
    if (media >= 6) {
        return "aprovado";
    }
    else {
        return "reprovado";
    }

}

// calculando a média e verificando a aprovação
const media = CalculoMedia(nota1, nota2, nota3, nota4);
const status = VerificaAprovacao(media);
console.log("Aluno: " + nome);
console.log("Média: " + media.toFixed(2));
console.log("Situação: " + status);