function Bird(){
    this.name = '봄봄';
    return {
        name : '삐삐',
        song : function (){
            console.log(this.name + ': 안녕!!');
        }
    }
}
const bom = new Bird();
bom.song();

function Bird2(){
    this.name = '봄봄';
    return {
        name : '삐삐',
        song :  ()=> {
            console.log(this.name + ': 안녕!!');
        }
    }
}
const bom2 = new Bird2();
bom2.song();