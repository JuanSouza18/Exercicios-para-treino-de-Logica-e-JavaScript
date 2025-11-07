let salario = prompt("Digite o salário do funcionário (0 para sair): ");
salario = parseFloat(salario);

let porcentagemAumento =  prompt("Digite a porcentagem de aumento (%): ");
porcentagemAumento = parseFloat(porcentagemAumento);

while (salario !== 0) {
    let aumento = (salario * porcentagemAumento) / 100;
    let novoSalario = salario + aumento;
    console.log("Salário atual: R$ " + salario.toFixed(2));
    console.log("Aumento: R$ " + aumento.toFixed(2));
    console.log("Novo salário: R$ " + novoSalario.toFixed(2));
    console.log("-----------------------------");
}