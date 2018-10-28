
       
const product = {
    productName: '7D 건조 망고',
    type: '당절임',
    ingredient: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
    countryOfOrigin: '필리핀'
};

// for in 구문 활용
let output = '';
for (var key in product) {
    output +=  key + ': ' + product[key] + '\n';
}
console.log(output);
