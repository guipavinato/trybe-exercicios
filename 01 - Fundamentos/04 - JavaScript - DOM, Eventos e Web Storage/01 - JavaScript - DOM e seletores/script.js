// Seu código aqui

// Exercício 1
const alteraParagrafo = () => {
  document.getElementsByTagName('p')[1].innerText = `Daqui a dois anos me vejo um homem mais 
  maduro, experiente, com habilidades consolidadas, e em busca de criar uma nova família`;
};

alteraParagrafo();

// Exercício 2
const alteraCorDeFundo = () => {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76, 164, 109)';
};

alteraCorDeFundo();

// Exercício 3
const alteraCorDeFundoCentro = () => {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
};

alteraCorDeFundoCentro();

// Exercício 4
const corrigeTitulo = () => {
  document.querySelector('h1').innerText = 'Desafio - JavaScript';
};

corrigeTitulo();

// Exercício 5
const upperCase = () => {
  const upper = document.querySelectorAll('p')[0].innerText;
  document.querySelectorAll('p')[0].innerText = upper.toUpperCase();
};

upperCase();

// Exercício 6

const exibeTags = () => {
  const tags = document.querySelectorAll('.center-content p');
  document.querySelector('footer p').innerHTML = `${tags[0].innerHTML}<br> 
  ${tags[1].innerHTML}<br>
  ${tags[2].innerHTML}`;
};

exibeTags();
