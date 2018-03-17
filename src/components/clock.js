import React, { Component, Time } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }
    }
    render(){
        return (
            <div>
                <h1>The time is: {this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Clock;