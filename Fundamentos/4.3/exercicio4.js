let n = 6;
let andares;
let impar;
if (n%2 == 0){
    andares = n/2;
    impar = 0;
}else{
    andares = (n/2)+1;
    impar = 1;
}
for(let i = 1;i <= andares;i += 1){
    let asterisco = "";
    let espaco = "";
    for(let x = impar; x < andares-i; x += 1){
        espaco += " ";
    }
    for (let y = i; y > 0; y -= 1){
        asterisco += "*";
    }
    for (let y = i; y > impar; y -= 1){
        asterisco += "*";
    }
    console.log(espaco + asterisco);
}