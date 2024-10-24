let nFatorial = 10;
let fat = 10;
for (let i = nFatorial; i > 1; i-= 1) {
    fat = fat * (i-1);
}

console.log(`o fatorial de ${nFatorial} é: ${fat}`);
