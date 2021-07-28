let angA = 60;
let angB = 60;
let angC = 60;
if (angA<0){
    console.log("angulo A inválido");
} else if(angB<0){
    console.log("angulo B inválido");
} else if(angC<0){
    console.log("angulo C inválido");
} else{
    let soma = (angA+angB+angC);
    if (soma == 180){
        console.log(true);
    }else{
        console.log(false);        
    }
}

