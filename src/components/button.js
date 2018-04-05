//add method that adds class to add button color when clicked 
import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            color: 'grey',
        }
    }

    componentWillReceiveProps(nextProps, prevState) {
        const { clicked } = this.state;
        if (nextProps.determineSelected) {
            this.setState({
                color: '#26a69a',
                clicked: !clicked,
            });
        } else {
            this.setState({
                color: 'gray',
                clicked: !clicked
            });
        }   
    }

    handleClick() {
        const { clicked, selected } = this.state;
        let currentArray = selected;
        // debugger;         


        if(!clicked) {   
            // currentArray.push(this.props.title);
            // let currentArray = this.props.title;
            this.setState({
                color: '#26a69a',
                clicked: !this.state.clicked,
                selected: [...selected, this.props.title]
            });
        } else {
            currentArray.pop();
            this.setState({
                color: 'gray',
                clicked: !this.state.clicked,
                selected: [...currentArray]
            });
        };

    };

    render() {
        // console.log(this.state.clicked);
        // const active = this.state.clicked;
        // if(active) {

        // }
        console.log(this.state);
        return (
            <div>
                <a onClick={this.props.selectedCheck.bind(null, this)} style={{backgroundColor: this.state.color}} className={`btn-desk waves-effect waves-light btn ${this.props.style}`}>
                <div>
                    <div className="title-container">
                       {this.props.title} 
                    </div>
                     <div>
                       {this.props.descrip}   
                    </div>                                       
                </div>
                </a>
            </div>
        );
    };
};

export default Button;
