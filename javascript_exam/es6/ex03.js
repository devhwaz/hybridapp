//for of문
let str = "java script !!!!";

for(let index in str){
    console.log(str[index]);
}

for(let value of str){
    console.log(value);
}

let arr = [10,20,30];
arr.add = 100;
for(let index of arr){
    console.log(index);
}