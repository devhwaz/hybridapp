//JSON 객체
const product = {
    productName: '7D 건조 망고',
    type: '당절임',
    ingredient: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    countryOfOrigin: '필리핀'
};

console.log(JSON.stringify(product));

var test = JSON.stringify(product);
console.log(test);
console.log(test.productName);

var test = JSON.parse(test);
console.log(test.productName);