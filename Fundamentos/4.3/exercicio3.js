let n = 5;
let asterisco = "";
let espaco = "";
for(let i = 1;i <= n;i += 1){
    asterisco="";
    espaco = "";
    for(let x = 0; x <n-i; x += 1){
        espaco += " ";
    }
    for (let y = i; y>0; y-=1){
        asterisco+="*";
    }
    console.log(espaco + asterisco);
}