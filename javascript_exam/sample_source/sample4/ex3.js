//Array 객체
var array1 = [52, 273, 103, 57, 32];
var array2 = new Array();
var array3 = new Array(10);
var array4 = new Array(52, 273, 103, 57, 32);

console.log(array1.sort()); //
console.log(array1);

array1.sort(function (left, right) {
    return left - right;
});
console.log(array1);

console.log(array1.slice(0,3));
console.log(array1);

array1.push(3);
console.log(array1);

array1.reverse();
console.log(array1);

array1.splice(0,3);
console.log(array1);