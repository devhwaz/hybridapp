import React, {Component,Fragment} from 'react';

class HelloComponent extends Component{
    static defaultProps ={
        name : '익명'
    }
   
    // constructor(props){
    //     super(props);
    //     this.state =  {
    //         number: 0
    //     }
    // }
    state = {
        number : 0,
        age : 20
    }
    render(){        
        return (
            <Fragment>
                <div>나의 첫 컴포넌트^^</div>
                <p>나의 이름은 {this.props.name} 입니다. </p>
                <p>나의 나이는 {this.state.age} 입니다. </p>
                <button
                    onClick = {
                        ()=>{
                            console.log(this.state.age);
                            this.setState({
                                age : this.state.age + 1
                            })
                         //   this.state.age = this.state.age + 1
                        }
                    } >클릭</button>
                <h2>{this.state.number}</h2>        
            </Fragment>
        );
    }
}

// HelloComponent.propTypes = {
//     name : PropTypes.string
// }

export default HelloComponent;