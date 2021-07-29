let custoProduto = -1;
let valorDeVenda = 150.00;

if (custoProduto>=0 && valorDeVenda>=0){
    let imposto = custoProduto*20/100;
    let custoTotalProduto = custoProduto + imposto;
    let lucro = valorDeVenda - custoTotalProduto;
    console.log("A empresa terá R$", lucro*1000, "de lucro após mil vendas desse produto.");
    
}else{
    console.log("Um ou mais valores são inválidos!");
}