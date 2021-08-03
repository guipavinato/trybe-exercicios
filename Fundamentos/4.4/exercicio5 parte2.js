let array = [2, 3, 2, 5, 8, 2, 3];
function repete(array){
  let repAnt=0;
  let pos=0;
  let rep=0;
  for(let i=0; i<array.length;i+=1){
    for(let l=i+1; l<array.length; l+=1){
      if(array[i]===array[l]){
        rep+=1;
      }
    }
    if(repAnt<rep){
      repAnt=rep;
      pos=i;
    }
  }
  return array[pos];
}
console.log(repete(array));