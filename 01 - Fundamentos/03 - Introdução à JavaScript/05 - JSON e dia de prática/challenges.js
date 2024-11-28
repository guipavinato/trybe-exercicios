const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// Iniciando exercício

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
function splitSentence(sentence) {
  return sentence.split(' ');
};

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
};

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
function addMusics(artistName, musicName, time) {
  return playlist.push({ artist: artistName, music: musicName, musicTime: time });
};

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) {
  let expensive = [data[category][0].name, data[category][0].price];
  for (let i = 1; i < data[category].length; i += 1) {
    if (data[category][i].price > expensive[1]) {
      expensive[0] = data[category][i].name;
      expensive[1] = data[category][i].price;
    };
  };
  return `O produto mais caro é: ${expensive[0]}, que custa: R$${expensive[1].toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].name == item) {
      return true;
    };
  };
  return false;
};

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
function addNewItem(data, category, item, itemPrice, itemIngredients, itemCalories) {
  const resposta = { 
    name: item,
    price: itemPrice,
    ingredients: itemIngredients,
    calories: itemCalories,
  };
  
  for (let i = 0; i < data[category].length; i += 1) {
    if (data[category][i].name == item) {
      return `O produto: "${item}" já existe!`;
    };
  };
  data[category].push(resposta);
  return resposta;
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
function counterGender(data) {
  let masc = 0;
  let fem = 0;
  for(let i = 0; i < data.guests.length; i += 1) {
    if (data.guests[i].gender == 'male') {
      masc += 1;
    } else if (data.guests[i].gender == 'female') {
      fem += 1;
    };
  };

  return {
    male: masc,
    female: fem,
  };
};

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
function filterState(data, dataState) {
  let states = [];
  for (let i = 0; i < data.guests.length; i += 1) {
    if (data.guests[i].address.state == dataState) {
      states.push(data.guests[i]);
    };

  };
  return states; 
};

// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture(data, link) {
  let elements = [];
  
  for (let i = 0; i < data.guests.length; i += 1) {
    data.guests[i].picture = 'https://picsum.photos/200/300';
    elements.push(data.guests[i]);
  };
  return elements;
};

// Requisito 10 - Crie um função que gera um relatório
function generateReport(data) {
  let age = 0;
  countriesList = [];
  
  for (let i = 0; i < data.guests.length; i += 1) {
    age += data.guests[i].age;
    if (!(countriesList.includes(data.guests[i].country))) {
      countriesList.push(data.guests[i].country);
    };
  };

  return {
    totalGuests: data.guests.length,
    totalGender: counterGender(data),
    avgAge: parseFloat((age / (data.guests.length)).toFixed(2)),
    countries: countriesList.sort(),
  };
};

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
