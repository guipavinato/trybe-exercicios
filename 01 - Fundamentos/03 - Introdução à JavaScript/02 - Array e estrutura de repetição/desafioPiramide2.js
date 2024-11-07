let n = 6;

let ast = [];
let result;
for (let i = 0; i < n; i += 1) {
    ast.push(` `)
}

for (let j = n-1; j >= 0; j -= 1) {
    if (j == n-1) {
        result = ast.join('')
        console.log(result)
    }
    ast.shift()
    ast.push('*')
    result = ast.join('')
    console.log(result);   
}