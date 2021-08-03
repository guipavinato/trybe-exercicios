function palindromo(palavra){
  let pal = 0;
  for (let key = 0; key<palavra.length;key+=1){
    if(palavra[key]===palavra[(palavra.length-1)-key]){
      pal+=1;
    }
  }
  if(pal==palavra.length){
    console.log('Sim, é um palíndromo!!')
  }else{
    console.log('Não, infelizmente não é um palíndromo!!')
  }
}

palindromo('arara');