let array=[2, 3, 6, 7, 10, 1]
function maiorValor(array){
  let maior=0;
  let posicao=0;
  for(let i = 0; i<array.length; i+=1){
    if (array[i]>=maior){
      maior=array[i]
      posicao=i;
    }
  }
  return posicao;
}
console.log(maiorValor(array));