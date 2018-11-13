
let i = 10;
setTimeout(function(){
    i = 100;
    console.log('안녕');
},0);

console.log("끝!!",i);





let p = new Promise (function(resolve, reject){
    setTimeout(function(){
      //  resolve('^^');
        reject("-_-;;")
    });
});

p.then(function(value){
    console.log(value);
});
p.catch(function(value){
    console.log(value);
});