//연산자
//펼침연산자 (...)
let arr = [1,2,3];
let arr2 = [0,arr[0],arr[1],arr[2],4];
console.log(arr2);
let arr3 = [0,...arr,4];
console.log(arr3);

function test(a,b,c){
    console.log(a,b,c);
}
test(...arr);
let obj = {p1:1,p2:2}
let obj2 = {p1:10,...obj,p3:3}
console.log(obj2);

function ex(p1,p2){
    console.log(p1,p2);
}
ex(1,2);


