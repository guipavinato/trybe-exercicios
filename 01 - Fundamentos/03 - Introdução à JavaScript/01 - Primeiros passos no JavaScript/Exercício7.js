let salarioBruto = 3000
let salarioLiquido = 0;

let aliquotINSS;
let aliquotIR

// INSS

if (salarioBruto <= 1556.94) {
    aliquotINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92 ) {
    aliquotINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82 ) {
    aliquotINSS = salarioBruto * 0.11;
} else {
    aliquotINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotINSS;

// IR

if (salarioBase <= 1903.98) {
    aliquotIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05 ) {
    aliquotIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68 ) {
    aliquotIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotIR = (salarioBase * 0.275) - 869.36;
}

salarioLiquido = (salarioBase - aliquotIR)

console.log(salarioLiquido);
