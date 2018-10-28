//ECMA 5 Array
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
console.log(Array.isArray(1));

const array = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

console.log(array.indexOf(5)); 
console.log(array.lastIndexOf(5));


let sum = 0;
let output = '';
array.forEach(function (currentValue,index) {
    console.log(index+':'+currentValue);
});

