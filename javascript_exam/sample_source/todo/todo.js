//초기데이터 (나중에는 서버에서 받아올 부분)
let basicDatas = ['봄봄이랑 놀아주기','맛있는거 먹기','react 공부하기'];

for(let i = 0; i < basicDatas.length; i++){
    inputvalue = basicDatas[i];
    todoItemAdd(inputvalue);
}


let todoUl = document.querySelector("#todo-item-list");

todoUl.addEventListener('click',function(event){
    let enentTarget = event.target; 
    if(event.target.tagName === 'LI' || event.target.tagName === 'SPAN'){
        if(event.target.tagName ==='LI'){
            enentTarget =enentTarget.querySelector('.todo-text');
        }
        enentTarget.classList.toggle('checked');
    }
});

 const inputbtn = document.querySelector('.add-button');
//  const myinput = document.querySelector('#myInput');
 

inputbtn.addEventListener('click', function(){
    inputvalue = document.querySelector('#myInput').value;
    if(inputvalue === ''){
        alert("할 일을 입력해 주세요^^ "); 
        return;
    }
    document.querySelector('#myInput').value = '';
    todoItemAdd(inputvalue);   
});

function todoItemAdd(inputvalue){   
    const li = document.createElement('li');
    li.className = "todo-item";
    const textSpan = document.createElement('SPAN');
    textSpan.className = "todo-text" ;
    
    const todotxt = document.createTextNode(inputvalue);
    textSpan.appendChild(todotxt);
    li.appendChild(textSpan);
    document.getElementById('todo-item-list').appendChild(li);
    
    const removeSpan = document.createElement("SPAN");
    const removetxt = document.createTextNode("\u00D7");
    removeSpan.className = "remove";

    removeSpan.appendChild(removetxt);
    li.appendChild(removeSpan);

    removeSpan.addEventListener('click',function(){
        let div = this.parentElement;
        //    div.style.display="none";
        div.remove();
    });
}


