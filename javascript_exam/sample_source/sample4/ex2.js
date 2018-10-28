//String 객체
var stringFromLiteral = 'Hello World..!';
var stringFromConstructor = new String('Hello World..!');

// 변수의 자료형을 출력합니다.

console.log(typeof (stringFromLiteral)); 
console.log(typeof (stringFromConstructor));

console.log(stringFromLiteral.length);
console.log(stringFromLiteral.toUpperCase());
console.log()

//메서드체이닝
let output = "Hello World";
output = output.toLowerCase().substring(0, 10).link('http://koscom.co.kr');
console.log(output);
