/* function을 이용한 여러 객체 생성 방법 */

var Foo = function( name, nick ) {
	this.name = name;
	this.nick = nick;
	this.aNumber = 5;
	this.doFoo = function() {
		alert( "I'm " + this.name );
	};
};

var foo1 = new Foo("강경미", "carami");
foo1.address = "서울시";
foo1.f = function(){
	console.log(this.name);
}

var foo2 = new Foo("강경미", "carami2");

foo1.doFoo();
foo2.doFoo();

foo1.f();
