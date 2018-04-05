//description does not show up on button
import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: true
        }
    }

    active() {

    }

    handleClick() {
        const { clicked } = this.state;
        if(clicked) {
            console.log('true');
        };
        this.setState({
            clicked: !this.state.clicked
        });
    };

    render() {
        // console.log(this.state.clicked);
        // const active = this.state.clicked;
        // if(active) {

        // }
        return (
            <div>
                <a onClick={this.handleClick.bind(this)} className={`btn-desk waves-effect waves-light btn ${this.props.style}`}>
                <div>
                    <p>
                       {this.props.title} 
                    </p>
                     <br/>
                     <p>
                       {this.props.descrip}   
                    </p>                                       
                </div>
                </a>
            </div>
        );
    };
};

export default Button;
