//상속
var person = {
    name: '사람',
    age : 20,
    getAge: function(b){
      return this.age;
    }
  };
  
  console.log(person.getAge()); // 20 'this' 는 person을 가리킴.
  console.log(person.getAge());

  var carami = Object.create(person); // carami는 person을 프로토타입을  가지는 오브젝트
  console.log(carami.getAge());

  carami.age = 30; // carami 에 age속성을 추가
  console.log(carami.getAge()); // 30 this 는 carami를 가리킴

