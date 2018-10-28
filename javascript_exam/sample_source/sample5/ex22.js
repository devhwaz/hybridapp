try {
    willExcept.byeBye();
} catch (exception) {
    console.log(exception);    
}
let score = 0;
if(score < 0) {
    throw 'score에 음수 값이 올 수 없음.';
}

console.log('test');