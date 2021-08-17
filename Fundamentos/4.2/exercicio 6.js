let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];
for (let index=0; index<numbers.length; index+=1){
    if (numbers[index]%2!=0){
        impar.push(numbers[index]);
    }
}
if (impar.length>0){
    console.log("Valor(es) ímpar(es):", impar);
}else{
    console.log("nenhum valor ímpar encontrado");
}
