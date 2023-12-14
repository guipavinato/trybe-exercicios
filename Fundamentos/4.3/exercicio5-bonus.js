let n = 7;
let andares = (n + 1) / 2;
let esquerda = andares;
let direita = andares;
let asterisco = '*';
for (let i = 1; i <= andares; i += 1) {
  let saida = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == esquerda || col == direita || i == andares) {
      saida += asterisco;
    } else {
      saida += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(saida);
}