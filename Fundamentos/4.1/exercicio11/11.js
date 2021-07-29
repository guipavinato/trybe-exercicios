let inss;
let ir;
let parcelaIr;
let salarioBase;
let salarioBruto = 36000;
let salarioLiquido;
if (salarioBruto>5189.82){
    inss=570.88;    
} else if(salarioBruto>2594.93){
    inss=salarioBruto*11/100;
} else if(salarioBruto>1556.95){
    inss=salarioBruto*9/100;
} else if(salarioBruto<=1556.94 && salarioBruto>=0){
    inss=salarioBruto*8/100;
} else{
    console.log("Salário Inválido!");
}

salarioBase=salarioBruto-inss;

if (salarioBase>4664.68){
    ir=salarioBase*27.5/100;
    parcelaIr=869.36;
} else if(salarioBase>3751.06){
    ir=salarioBase*22.5/100;
    parcelaIr=636.13;
} else if(salarioBase>2826.66){
    ir=salarioBase*15/100;
    parcelaIr=354.80;
} else if(salarioBase>1903.99){
    ir=salarioBase*7.5/100;
    parcelaIr=142.80;
} else if(salarioBase>=0 && salarioBase<=1903.98){
    ir=0;
    parcelaIr=0;
} else{
    console.log("Salário Inválido!");
}

salarioLiquido=salarioBase-(ir-parcelaIr);
console.log("O salário líquido é:", salarioLiquido);