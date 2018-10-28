//filter - 요소들을 걸러낼 목적으로 사용.
//리턴값이 true 인 값들만 모아줌. 
//결과값이 하나도 없더라도 빈 배열을 리턴해줌. 

const arr = [2,4,6,3,55,333,67];
let arr2= arr.filter(function(n){
    return n%2 === 0;
});
console.log(arr2);
let count = 0;


let arr3 = arr.filter(function(n){
    return n%2 === 0;    
}).map(function(n){
    return n*2;
});
console.log(arr3);

