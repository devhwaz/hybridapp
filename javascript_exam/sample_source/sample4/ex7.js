// find - 단 하나의 요소만 찾아줌. 
//리턴값이 true가 될때 까지 요소들을 순회하다가 true를 리턴받으면 종료!! 
//끝가지 없으면 undefined 를 반환함. 

const arr = [2,4,6,3,55,333,67];
const findValue = arr.find(n => n%8==0);
console.log(findValue);

let value = arr.find(function(){
    return n%2 == 0;
});

