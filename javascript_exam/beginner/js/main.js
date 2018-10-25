var headline = document.querySelector("h1");
// console.log(headline);
// console.log(headline.innerHTML );
var text =headline.innerHTML ;
headline.innerHTML =text+" hahah";

var jsImg = document.querySelector("img");


jsImg.onclick = imgChange;
function imgChange(){
    var mysrc = jsImg.getAttribute("src");
    if(mysrc === "img/js_logo.png"){
        jsImg.setAttribute('src',"img/js_logo2.png");
    }else{
        jsImg.setAttribute('src','img/js_logo.png');
    }
}

var mybtn = document.querySelector("button");

function setChangMessage(){
    var newMsg = prompt("새로운 메시지를 입력하세요.");
    localStorage.setItem("msg",newMsg);
    document.querySelector(".message").innerHTML=newMsg;   
}
mybtn.onclick = function(){
    setChangMessage();
}

if(!localStorage.getItem("msg")){
    setChangMessage();
}else{
    var storeName = localStorage.getItem("msg");
    document.querySelector(".message").innerHTML = storeName;
}