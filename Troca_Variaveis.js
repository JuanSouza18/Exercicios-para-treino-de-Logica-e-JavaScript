let a = 12;
let b = 34;

dconsole.log('Antes da troca: a =', a, ', b =', b);

// troca de valores usando uma variável temporária
let temp = a;
a  = b; 
b = temp;

console.log('Depois da troca: a =', a, ', b =', b); 