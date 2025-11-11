let A = prompt("Digite o valor do lado A do triângulo:");
let B = prompt("Digite o valor do lado B do triângulo:");
let C = prompt("Digite o valor do lado C do triângulo:");

A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

if ( A + B > C && A + C > B && B + C > A) {
    console.log("Os valores formam um triângulo.");
}
else {
    console.log("Os valores não formam um triângulo.");
} 