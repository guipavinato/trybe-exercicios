function palindromo(palavra){
  let pal = 0;
  for (let key = 0; key<palavra.length;key+=1){
    if(palavra[key]===palavra[(palavra.length-1)-key]){
      pal+=1;
    }
  }
  if(pal==palavra.length){
    return true;
  }else{
    return false;
  }
}
let palavra = 'arara';
console.log(palindromo(palavra));