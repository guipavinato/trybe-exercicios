let word = 'tryber';

// let splitWord = word.split('')

// let reverseWord = splitWord.reverse();

// let joinWord = reverseWord.join('');

// console.log(joinWord);


let reverseWord = '';

for (let i = (word.length-1); i >= 0 ; i -= 1) {
    reverseWord != '' ? reverseWord = reverseWord + word[i] : reverseWord = word[i]
}

console.log(reverseWord);

