let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum=0;
let media=0;
for(index of numbers){
    sum += index;
}
media = sum/numbers.length;
console.log(media);