import React, { Component } from 'react';
import { Button} from 'reactstrap';
import Counter from './counter';

class CounterList extends Component {
    state = {
        numOfCounters: 0
    }
    render() {
        let counterArr = new Array(this.state.numOfCounters).fill('a');
        let counters = counterArr.map((_, i) => <div key={i} style={{color:"#004d00"}}><b>Counter {i + 1} <Counter /></b><hr /></div>)
        return (
            <div className="container" style={{padding:"8px"}}>
            <div> 
            <Button className='add' style={{backgroundColor:"#000033"}} size="lg" active onClick={() => this.setState(prevState => ({ numOfCounters: prevState.numOfCounters + 1 }))}>Add Counter</Button>&ensp;&ensp;&ensp;
                <Button className='remove'style={{backgroundColor:"#000033"}}size="lg" active
                    onClick={() => this.setState(prevState => ({ numOfCounters: ((prevState.numOfCounters === 0) ? 0 : prevState.numOfCounters - 1) }))}>
                    Remove Counter
                </Button>
                {counters}
            </div>
                
            </div>
        );
    }
}

export default CounterList;