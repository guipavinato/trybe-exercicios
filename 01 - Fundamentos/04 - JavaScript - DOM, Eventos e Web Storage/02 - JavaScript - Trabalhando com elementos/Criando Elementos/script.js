let irmaoDeOndeVoceEsta = document.createElement('section');
let filhoDeOndeVoceEsta = document.createElement('section');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');

irmaoDeOndeVoceEsta.id = 'irmaoDeOndeVoceEsta';
filhoDeOndeVoceEsta.id = "filhoDeOndeVoceEsta";
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';

document.getElementById('pai').appendChild(irmaoDeOndeVoceEsta);
document.getElementById('elementoOndeVoceEsta').appendChild(filhoDeOndeVoceEsta);
document.getElementById('primeiroFilhoDoFilho').appendChild(filhoDoPrimeiroFilhoDoFilho);
let quatro = document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling;

console.log(quatro);
