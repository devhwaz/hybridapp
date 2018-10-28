//reduce - map,filter,find 등을 모두 대체 할 수 있는 유연한 메소드

const arr = [9,2,8,5,7];
let sum = arr.reduce(function(pre,value){
   return pre+value;
}); 
console.log(sum);



let count = 0;
 sum = arr.reduce(function(pre,value){
  return pre+value;
},0);//두번째 인자로 initalValue 할당
console.log(count);
console.log(sum);


//map처럼 사용 할 때...   reduce의 두번째 인자로 빈 배열 넣어줌. 
//처음 실행할 때 pre - 빈배열 value - a 
var arr2 = ['a','b','c'];
let mResult = arr2.reduce(function(pre,value){
  pre.push(value+'aa');
  return pre;
},[]);
console.log(mResult);


//filter를 reduce로 구현
let fResult = arr.reduce(function(pre,value){
  if(value % 5 == 0){
    pre.push(fResult);    
  }
  return pre;
},[]);

//find를 reduce로 구현
let findResult = arr.reduce(function (pre, value) {
    if (typeof pre == 'undefined' && value % 5 == 0) {
        pre = value;
    }
    return pre;
}, undefined);
console.log(findResult); 


var score={
    kor:99,
    eng:98,
    math:78
  };
  
  let sum = 0;
  for(let key in score){
    sum+=score[key];
  }
  console.log(sum);
  
  //Object.keys 활용.  Object.keys(score) score 객체의 key값을 배열로 리턴.
  let sum2 = Object.keys(score).reduce(function(pre,value){
    return pre + score[value];
  },0);
  
  console.log(sum2);