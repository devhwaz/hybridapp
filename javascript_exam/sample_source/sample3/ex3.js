
//실습 
//원하는 객체를 하나 정의하고 사용해 보세요. 

var person = {
    name: '강경미',
    eat: function (food) {
        console.log(this.name+' 는'+food+"를 마십니다.(먹습니다)");
        }
};

// 메서드를 호출합니다.
person.eat('커피');
