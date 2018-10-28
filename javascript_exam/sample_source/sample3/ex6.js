//생성자 함수 - new 키워드로 객체를 생성할 수 있는 함수

//생성자 함수 정의
function MakeCar(name,speed){
    this.name = name;
    this.speed = speed;

    this.toString = function(){
        return "이 차는 "+ this.name +"입니다.";
    }
}

//생성자 함수 사용
let car1 = new MakeCar('그랜저',120);
let car2 = new MakeCar('모닝',130);
console.log(car1.toString());

//instanceof 
console.log(car1 instanceof MakeCar);
console.log(car1 instanceof Function);
console.log(car1 instanceof Object); 
