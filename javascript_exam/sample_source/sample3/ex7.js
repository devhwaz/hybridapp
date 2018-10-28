//프로토타입 
//객체가 생성될 때 속성뿐 아니라 메서드도 각 각 생긴다. 
//생성자 함수로 객체를 생성하면 공통으로 관리되는 prototype공간을 가진다. 

function MakeCar(name,speed){
    this.name = name;
    this.speed = speed;

    // this.toString = function(){
    //     return "이 차는 "+ this.name +"입니다.";
    // }
}
MakeCar.prototype.toString = function(){
    return "이 차는 "+ this.name +"입니다.";
}


//new를 이용한 객체 생성
let car1 = new MakeCar('그랜저',120);
console.log(car1.name);


//new로 생성하지 않았을 때 발생되는 문제점 
let car2 =  MakeCar('그랜저',120);
console.log(car2.name);

