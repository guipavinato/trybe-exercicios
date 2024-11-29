// exercicio 1
const titulo = document.createElement('h1');
const bodyPai = document.querySelector('body');
titulo.innerText = 'TrybeTrip - Agência de Viagens';
bodyPai.appendChild(titulo);

// exercicio 2
const principal = document.createElement('main');
principal.className = 'main-content';
bodyPai.appendChild(principal);

// exercicio 3
const center = document.createElement('section');
center.className = 'center-content';
principal.appendChild(center)

// exercicio 4
const paragraph = document.createElement('p');
paragraph.innerText = 'Texto de teste da criacao do paragrafo'
center.appendChild(paragraph)

// exercicio 5
const esquerdo = document.createElement('section');
esquerdo.className = 'left-content'
principal.appendChild(esquerdo);

// exercicio 6
const direito = document.createElement('section');
direito.className = 'right-content'
principal.appendChild(direito);

// exercicio 7
const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
esquerdo.appendChild(imagem);

// exercicio 8
const lista = document.createElement('ul');
direito.appendChild(lista);
const listaItens = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

const insereItens = (listaItens) => {
    for (let i = 0; i< listaItens.length; i += 1) {
        const item = document.createElement('li')
        item.innerText = listaItens[i];
        lista.appendChild(item);
    }
}

insereItens(listaItens);

// exercicio 9
const headThreeOne = document.createElement('h3');
headThreeOne.innerText = 'subtitulo - 1';
const headThreeTwo = document.createElement('h3');
headThreeTwo.innerText = 'subtitulo - 2';
const headThreeThree = document.createElement('h3');
headThreeThree.innerText = 'subtitulo - 3';

principal.appendChild(headThreeOne);
principal.appendChild(headThreeTwo);
principal.appendChild(headThreeThree);

// bonus
titulo.className = 'title';

headThreeOne.className = 'description';
headThreeTwo.className = 'description';
headThreeThree.className = 'description';

principal.removeChild(esquerdo);

direito.style.marginRight = 'auto';

center.parentElement.style.backgroundColor = 'green';

lista.removeChild(lista.lastElementChild);
lista.removeChild(lista.lastElementChild);

