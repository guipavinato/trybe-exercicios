let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum=0;
let media=0;
for(index of numbers){
    sum += index;
}
media = sum/numbers.length;
if (media>=20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor que 20");
}
