let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(array){
  let maior='';
  let string='';
  for(let i=0; i<array.length;i+=1){
    string=array[i];
    if(string.length>=maior.length){
      maior = string;
    }
  }
  return maior;
}
console.log(maiorNome(array));
