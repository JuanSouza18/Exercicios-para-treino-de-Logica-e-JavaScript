let nota1 = prompt("Insira  a primera nota:");
nota1 = parseFloat(nota1);

if (nota1 < 5) {
    console.log("Reprovado");
}
else if (nota1 >= 5 && nota1 <6.9) {
    console.log("Regular");
}
else if (nota1 >= 7 && nota1 <8.9) {
    console.log("Bom");
}
else if (nota1 >= 9 && nota1 <=10) {
    console.log("Excelente");
}
else {
    console.log("Nota inválida");
}
