import React, { Component } from 'react';
import { Button} from 'reactstrap';
class Counter extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <b style={{color:"#004d00" ,size:"lg"}}>Current Count Value: {this.state.count}</b><br></br>
                <Button className='increment'  style={{backgroundColor:"#330033"}} size="lg" active  onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}>Increment</Button>&ensp;&ensp;&ensp;
                <Button className='decrement'  style={{backgroundColor:"#330033"}} size="lg" active  onClick={() => this.setState(prevState => ({ count: prevState.count - 1 }))}>Decrement</Button>
            </div >
        )
    }
}
export default Counter;