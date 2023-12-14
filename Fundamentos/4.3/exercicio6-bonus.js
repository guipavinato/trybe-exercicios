let n = 90;
let primo= 0;
for(let i = 2; i < n; i += 1){
    if(n%i == 0){
        primo += 1;
    }
}
if (primo == 0){
    console.log("O número "+n+" é primo!");
}else{
    console.log("O número "+n+" NÃO é primo!");
}