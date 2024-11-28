// Abrindo PR do exercicio
// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(string) {
  let palindrome = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    palindrome += string[i];
  }
  if (string === palindrome) { return true; }
  return false;
}

// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(intArray) {
  let maior = intArray[0];
  let indiceMaior;
  for (let i = 0; i < intArray.length; i += 1) {
    if (intArray[i] >= maior) {
      maior = intArray[i];
      indiceMaior = i;
    }
  }
  return indiceMaior;
}

// Requisito 3 - Crie a função getSmallestIndex
function getSmallestIndex(intArray) {
  let menor = intArray[0];
  let indiceMenor;
  for (let i = 0; i < intArray.length; i += 1) {
    if (intArray[i] <= menor) {
      maior = intArray[i];
      indiceMenor = i;
    }
  }
  return indiceMenor;
}

// Requisito 4 - Crie a função getLongestWord
function getLongestWord(strArray) {
  let maiorPalavra = strArray[0];
  for (let i = 1; i < strArray.length; i += 1) {
    if (strArray[i].length >= maiorPalavra.length) {
      maiorPalavra = strArray[i];
    }
  }
  return maiorPalavra;
}

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences
function countHighestNumberMaxOccurrences(intArray) {
  let maior = intArray[0];
  let ocorrencias = 1;
  for (let i = 1; i < intArray.length; i += 1) {
    if (intArray[i] > maior) {
      maior = intArray[i];
      ocorrencias = 1;
    } else if (intArray[i] === maior) {
      ocorrencias += 1;
    }
  }
  return ocorrencias;
}

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
