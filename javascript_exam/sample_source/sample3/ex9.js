//class를 이용한 생성 

class PersonClass {
    // PersonType 생성자와 동일합니다.
    constructor(name) {
        this.name = name;
    }
    // PersonType.prototype.sayName과 동일합니다.
    sayName() {
        console.log(this.name);
    }
}
let person = new PersonClass("carami");
person.sayName();   
console.log(person instanceof PersonClass);     // true
console.log(person instanceof Object);          // true
console.log(typeof PersonClass);                    // function
console.log(typeof PersonClass.prototype.sayName);  //function


class Foo {
    constructor() {
        this.foo = "bar";    // 실행될때 에러가 발생합니다.
    }
 }
 // 클래스 선언 이후에는 가능합니다.
    Foo = "baz";
 let foo1 = new Foo();
 console.log(foo1.foo);