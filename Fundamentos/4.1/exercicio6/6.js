let peca = "serpente";
peca=peca.toLowerCase();
console.log(peca);

switch(peca){
    case "peao" :
        console.log("1 espaço a frente, se a casa a frente estiver vazia");
        console.log("2 espaços a frente, caso seja o primeiro movimento e as casas estejam vazias");
        console.log("Captura na diagonal");
        console.log("Na quinta casa captura En Passant se o peão adversário andar 2 casas");
    break;
    case "peão" :
        console.log("1 espaço a frente, se a casa a frente estiver vazia");
        console.log("2 espaços a frente, caso seja o primeiro movimento e as casas estejam vazias");
        console.log("Captura na diagonal");
        console.log("Na quinta casa captura En Passant se o peão adversário andar 2 casas");
    break;
    case "torre" :
        console.log("Colunas");
    break;
    case "cavalo" :
        console.log("L de 4 casas");
    break;
    case "bispo" :
        console.log("diagonais");
    break;
    case "dama" :
        console.log("Qualquer direção e quantidade de espaços");
    break;
    case "rainha" :
        console.log("Qualquer direção e quantidade de espaços");
    break;
    case "rei" :
        console.log("Qualquer direção apenas 1 espaço, salvo no movimento de Roque");
    break;
    default :
        console.log("Peça inválida");
}