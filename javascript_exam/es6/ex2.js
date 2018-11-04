//비구조 할당(Destructuring)
//-배열 또는 객체에서 변수를 추출해 내는 표현식
let arr= [1,2,3];
//let a = arr[0];

let[a,b,c] = arr;
console.log(a,b,c);

let[x,,y] = arr;
console.log(x,y);

let [i=100,j=200,k=300]=[undefined,,1000];
console.log(i,j,k);

let[aa,bb,...cc]=[1,2,3,4,5,6,7];
console.log(aa,bb,cc);

let obj2 = {aaa:undefined,bbb:200,ccc:300};
let {aaa=111,bbb,ccc} = obj2;
console.log(aaa,bbb,ccc);

function foo([a,b,c=300]=[100,200],{d,e}={d:undefined,e:5000}){
        console.log(a,b,c,d,e);
    }
foo();