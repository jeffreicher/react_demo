import React, { Component } from 'react';

class Time extends Component {
    render(){
        return <span>{this.props.time.toLocaleTimeString()}</span>
    }
}

export default Time;