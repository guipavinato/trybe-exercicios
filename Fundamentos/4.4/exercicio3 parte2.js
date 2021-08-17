let array=[2, 4, 6, 7, 10, 0, -3];
function maiorValor(array){
  let posicao=0;
  for(let i = 0; i<array.length; i+=1){
    menor=array[i];
    if (array[i]<=menor){
      menor=array[i];
      posicao=i;
    }
  }
  return posicao;
}
console.log(maiorValor(array));