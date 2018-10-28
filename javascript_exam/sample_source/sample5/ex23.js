function divide(alpha, beta) {
    if (beta == 0) {
        throw 'DivideByZeroException';
    } else {
        return alpha / beta;
    }
}

// 출력합니다.
try {
    divide(10, 0);
} catch (exception) {
    console.log(exception);
}