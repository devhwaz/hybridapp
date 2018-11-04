//템플릿 리터럴 ``
let str = "여러줄로 입력 \n하고 싶어요.";
console.log(str);
let str2 =`여러줄로 입력
하고 싶어요.`;
console.log(str2);
let a = 10;
let b = 20;
console.log(`${a}+${b}의 결과는 ${a+b}입니다.`);

function sum(str,a,b){
    let result = `${str[0]}${a}${str[1]}${b}${str[3]}`;
}

let value = sum`a값은 ${a}이고, b의 값은 ${b}입니다.`;
console.log(value);