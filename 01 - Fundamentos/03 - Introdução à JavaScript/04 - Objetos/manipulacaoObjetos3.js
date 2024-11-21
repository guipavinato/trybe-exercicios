const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

// 1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array. 
// Essa função deve possuir dois parâmetros: o objeto e a posição no array.

function obterValor(obj, posicao) {
  return Object.values(obj.lessons[posicao])
}

console.log(obterValor(school, 2));

// 2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

function somaEstudantes(obj) {
  let soma = 0;
  for (let i =0; i < (obj.lessons).length; i += 1) {
    soma = soma + obj.lessons[i].students
  }
  return soma;
}

console.log(somaEstudantes(school));

// 3. Crie uma função que verifica se uma determinada chave existe em todos os elementos 
// do array lessons. O retorno deve ser um booleano (true ou false). 
// Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

function verificaChave(obj, chave) {
  for (let i = 0; i < (obj.lessons).length; i += 1) {
    if (obj.lessons[i][chave] == undefined) {
      return false;
    }
  }
  return true;
}

console.log(verificaChave(school, "course"));

// 4. Crie uma função para alterar o turno para noite no curso de Python. 
// Essa função deve ter três parâmetros: a base de dados a ser modificada, 
// o nome do curso e o novo valor da chave.

function alteraTurno(obj, curso, valor) {
  for (let i = 0; i < (obj.lessons).length; i += 1) {
    if (obj.lessons[i].course == curso) {
      obj.lessons[i].shift = valor
    }
  }
  return obj;
}

console.log(alteraTurno(school, 'JavaScript', 'Manhã'))
