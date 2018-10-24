var headline = document.querySelector("h1");
headline.innerHTML = "Hello javaScript~~";

var jsImage = document.querySelector("img");
jsImage.onclick = function(){
    var mySrc = jsImage.getAttribute("src");
    if(mySrc === "img/js_logo.png"){
        jsImage.setAttribute('src',"img/js_logo2.png");
    }else{
        jsImage.setAttribute('src','img/js_logo.png');
    }
}

var mybtn = document.querySelector('button');
var msgbox = document.querySelector(".message");

function setChangeMessage(){
    let mymsg = prompt('메시지를 입력해 주세요');
    localStorage.setItem('nmsg',mymsg);
    msgbox.innerHTML=mymsg;
}

mybtn.onclick = function(){
    setChangeMessage();
}

if(!localStorage.getItem('nmsg')) {
    setChangeMessage();    
  } else {
    var storedName = localStorage.getItem('nmsg');
    msgbox.innerHTML = storedName;   
  }