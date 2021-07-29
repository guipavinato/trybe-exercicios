let nota = -1;
let conv;
if (nota > 100){
    console.log("Nota inválida");
} else if (nota>=90){
    conv = "A";
} else if (nota>=80){
    conv = "B";
} else if (nota>=70){
    conv = "C";
} else if (nota>=60){
    conv = "D";
} else if (nota>=50){
    conv = "E";
} else if (nota<50 && nota>=0){
    conv = "F";
} else{
    console.log("Nota inválida");
}
console.log("Nota convertida =",conv);