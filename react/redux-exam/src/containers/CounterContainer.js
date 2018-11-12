import Counter from '../component/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

export function getRandomColor(){
    const colors = [
        '#495057',
        '#2d3423',
        '#565343',
        '#873443',
        '#3237e3',
        '#343787',
        '#763345',
        '#989043',
        '#544889',
        '#236768'        
    ];
    const random = Math.floor(Math.random()*10);

    return colors[random];
  
}
    const mapStateToProps = (state) =>({
        color : state.colorData.color,
        number : state.numberData.number
    });

    const mpaDispatchToProps = (dispatch) =>({
        onIncrement : ()=>dispatch(actions.increment()),
        onDecrement : ()=>dispatch(actions.decrement()),
        onSetColor : ()=>{
            const color = getRandomColor();
            dispatch(actions.setColor(color));
        }
    });


const CounterContainer = connect(
    mapStateToProps,
    mpaDispatchToProps
)(Counter);

export default CounterContainer;