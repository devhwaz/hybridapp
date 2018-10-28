//기본 내장객체
//Number객체

//리터럴로 선언했을 때와 object로 선언했을때 차이점. 
const numberFromLiteral = 273.123;
const numberFromObject = new Number(273);

console.log(typeof (numberFromLiteral));
console.log(typeof (numberFromObject));

console.log(typeof (numberFromLiteral) == 'number');
console.log(typeof (numberFromObject) == 'number');

console.log(numberFromLiteral.constructor == Number);
console.log(numberFromObject.constructor == Number);

console.log(numberFromLiteral.toFixed(1));
console.log(numberFromLiteral.toExponential());
console.log(numberFromLiteral.toPrecision());

console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);