//Array 객체가 가진 메소드 이용하기 
//map - 요소를 일괄적으로 변경할 때 사용 
const firstNames = ['kim','kang','hong','lee'];
let fullNames=firstNames.map(function(firstName){
    return firstName+" kyung mi";
});
console.log(fullNames);

//화살표함수 이용
fullNames=firstNames.map((firstName)=>firstName+" kyung mi");
console.log(fullNames);


//forEach 이용
fullNames = [];
firstNames.forEach(
    // function(fname){
    // fullNames.push(fname+" kyung mi");}
    fname => (fullNames.push(fname+" kyung mi"))
);
console.log(fullNames);