var array = [4,4,8,3,3,3,2,4,4]

//print every element of array:

array.forEach( item => 
    console.log (item));

//print first 3 elements of array

for (var i=0; i<=2; i++) {
    console.log(array[i])
};

//print sum of all elements

let sumOfElements = 0;
for (var i=0; i<=array.length-1; i++) {
    sumOfElements+=array[i];    
};
console.log("Sum of elements: " + sumOfElements)

//print sum of all element except element==4

let sumOfElements1 = 0;
for (var i=0; i<=array.length-1; i++) {
    if(array[i]!=4){
    sumOfElements1+=array[i]};    
};
console.log("Sum of elements except 4: " + sumOfElements1)
