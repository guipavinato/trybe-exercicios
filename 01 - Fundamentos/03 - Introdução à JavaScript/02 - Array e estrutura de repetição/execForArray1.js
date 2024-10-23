const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 -----------
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// 2 -----------
let result = 0;
for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
}

console.log(`o resultado da soma dos números no array é: ${result}`);

// 3 -----------
let mediaAritmetica = 0
for (let i = 0; i < numbers.length; i += 1) {
    mediaAritmetica += numbers[i];
}

mediaAritmetica = mediaAritmetica / numbers.length;
console.log(`a média aritimetica dos elementos do array é: ${mediaAritmetica}`);

// 4 -----------

if (mediaAritmetica > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}
