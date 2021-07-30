let numbers=[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult=[];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = index-1; secondIndex < index; secondIndex += 1) {
        if(secondIndex<(numbers.length-1)){
            mult.push((numbers[index])*numbers[secondIndex])
        }
    }
    if (index == numbers.length-1){
        mult.push((numbers[index])*2)
    }
}
console.log(mult);