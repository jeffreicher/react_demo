import React, { Clock } from 'react';

class Time extends Clock {
    constructor(props){
        super(props);
    }
    tick(){
        this.setState({
            time: new Date()
        });
    }
    componentWillMount(){
        setInterval(() => this.tick(), 1000);
    }
}