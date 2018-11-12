//액션정의 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//액션생성 함수 정의 
export const increment = ()=>({type:INCREMENT});
export const decrement = () =>({type:DECREMENT});

const initState = {
    number : 0
}
//리듀서 
export default function counter(state=initState,action){
    switch(action.type){
        case INCREMENT : 
            return{
                ...state,
                number : state.number + 1
            };
        case DECREMENT : 
            return {
                ...state,
                number : state.number - 1 
            };
        default :
            return state;
        
    }
}