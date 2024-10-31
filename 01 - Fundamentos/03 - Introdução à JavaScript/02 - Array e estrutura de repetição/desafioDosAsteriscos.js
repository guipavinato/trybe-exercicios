let n = 5;

let asteriscos = '*';

for (let i = n; i >= 0; i -= 1) {
    if (asteriscos.length == 1) {
        for(let j = n; j > 1; j -= 1) {
            asteriscos = asteriscos + ' *';
        }
    } else{
        console.log(asteriscos);
    } 
    
}