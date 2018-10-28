//Date객체

var date = new Date();
console.log(date);
var date = new Date('October 9');
console.log(date);
var date = new Date('October 9, 2018');
console.log(date);
var date = new Date('October 9, 2018 1:15:1');
console.log(date);
var date = new Date(2018, 9, 9, 1, 15, 1, 1);
console.log(date);

console.log(date.setDate(date.getDate() + 7));
var output = '';
output += 'toDateString: ' + date.toDateString() + '\n';
output += 'toGMTString: ' + date.toGMTString() + '\n';
output += 'toLocaleDateString: ' + date.toLocaleDateString() + '\n';
output += 'toLocaleString: ' + date.toLocaleString() + '\n';
output += 'toLocaleTimeString: ' + date.toLocaleTimeString() + '\n';
output += 'toString: ' + date.toString() + '\n';
output += 'toTimeString: ' + date.toTimeString() + '\n';
output += 'toUTCString: ' + date.toUTCString() + '\n';
console.log(output);

// Date생성자 함수의 프로토타입에 메서드를 추가
Date.prototype.getInterval = function (otherDate) {
    var interval;
    // 양수로 날짜 간격을 구하려고 조건문을 사용합니다.
    if (this > otherDate) {
        interval = this.getTime() - otherDate.getTime();
    } else {
        interval = otherDate.getTime() - this.getTime();
    }

    return Math.floor(interval / (1000 * 60 * 60 * 24));
};

let now = new Date();
let before = new Date('April 18, 2003');

console.log('Interval: ' + now.getInterval(before) + '일');
