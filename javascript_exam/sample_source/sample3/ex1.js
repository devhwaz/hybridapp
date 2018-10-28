    //배열
    var array = ['사과', '바나나', '망고', '딸기'];
    console.log(array[1]);

    //객체 리터럴 이용
    var product = {
        productName: '7D 건조 망고',
        type: '당절임',
        ingredient: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
        countryOfOrigin: '필리핀',
        toString:function(){
            return "이 상품의 이름은 "+this.productName+"입니다.";
        }
    };
    console.log(product);
    console.log(product.productName);
    console.log(product["type"]);
    console.log(product.toString())

    var product2 = new Object();
    product2.productName =  '7D 건조 망고';
    product2.type= '당절임';
    product2.ingredient= '망고, 설탕, 메타중아황산나트륨, 치자황색소';
    product2.countryOfOrigin= '필리핀';

    console.log(product2.productName);

    var product3 = {};
    //동적으로 속성을 추가함. 
    product3.productName =  '7D 건조 망고';
    product3.type= '당절임';
    product3.ingredient= '망고, 설탕, 메타중아황산나트륨, 치자황색소';
    product3.countryOfOrigin= '필리핀';
    
    console.log(product3);

    //delete 연산자 - 속성을 삭제함.  (배열의 요소 삭제)
    delete product2.type;
    console.log(product2);
    //in 키워드 키가 객체안에 있는지 확인.
    console.log('type' in product2);
    
    
    let arr=[1,2,3,4];
    delete arr[1];
    console.log(arr.length);


    
