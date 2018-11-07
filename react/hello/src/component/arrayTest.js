const nums = [1,2,3,4,5];

const plus5Nums = nums.map(
    // function(value){
    //     return value + 5;
    // }
    (value) => value+5
)

console.log(plus5Nums);

const todos = ['a','b','c'];
const todoList = todos.map(
    (todo)=>('<li>'+todo+'</li>')
)

const todoList2 = todos.map(
    (todo)=>(`<li>${todo}</li>`)
)
console.log(todoList2);

const names = ['삐삐','봄봄','멍멍','야옹'];

const addNames = names.concat('코코');
console.log(addNames);
console.log(names.slice(0,3));
//데이터를 삭제
//slice 
const index = 2;
const delNames = [...names.slice(0,index),...names.slice(index+1,names.length)];

console.log(delNames);

const delNames2 = names.filter((name,i)=> i !== index);
console.log(delNames2);

