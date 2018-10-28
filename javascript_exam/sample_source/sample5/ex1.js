//브라우저객체모델
//window,location,history...
//개발자도구 콘솔에서 실행시켜보세요.

for(let key in window){
    console.log(key +' : '+ window[key]);
}

window.open();
window.open('http://koscom.co.kr');
window.open('http://koscom.co.kr', 'child','width=600, height:300',true);

var child = window.open('', '', 'width=300, height=200');
var width = screen.width;
var height = screen.height;

child.moveTo(0, 0);
child.resizeTo(width, height);

location = 'http://koscom.co.kr';
location.href = 'http://koscom.co.kr';
location.assign('http://koscom.co.kr');
location.replace('http://koscom.co.kr'); //뒤로가기 안됨.

location = location;  //새로고침
location.reload();

