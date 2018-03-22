import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
            // forms: {
            //     email: '',
            //     password: ''
            // }
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // handleInputChange(event){
    //     const {name, value} = event.target;
    //     console.log('Target', event.target);
    //     console.log('Name:', event.target.name);
    //     console.log('Value', event.target.value);

    //     this.setState({
    //         /* nested way to change the state while not mutating the entire form input
    //         // forms: {
    //         //     ...this.state.forms, //destructuring, same as email:this.state.form.email, password: this.state.form.password, same key names - last one overrides 
    //         //     [name]: value
    //         // }   
    //         */         
    //     });
    // }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Form Submitted', this.state);
    }

    render(){
        const formStyles = {
            fontSize: '24px'
        };
        const {email, password} = this.state;

        console.log('State:', this.state);

        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>I'm a form</h1>
                <div>
                    <label >Email</label>
                    <br/>
                    <input name="email" style={formStyles} type="text" value={email} onChange={(e) => this.setState({email:e.target.value})}/>
                </div>
                <div>
                    <label >Password</label>
                    <br/>
                    <input name="password" style={formStyles} type="password" value={password} onChange={(e) => this.setState({password:e.target.value})}/>
                </div>
                <button>Login</button>
            </form>
        )
    }
}

export default Form;