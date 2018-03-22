import React,{ Component } from 'react';

class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleFormSubmit(){
        event.preventDefault();
        console.log('Called handleFormSubmit, this is where the data is sent to the server', this.state.form);

        const newState = {
            form: {
                email: '',
                password: ''
            }
        }
        this.setState(newState);
    }

    handleChange(event){
        const {name, value} = event.target;
        const {form} = this.state;
        form[name] = value;

        this.setState({form: {...form}});
    }

    render(){
        const {email, password} = this.state.form;
        return(            
            <form onSubmit={(event) => {this.handleFormSubmit(event)}}>
            <h1>Login</h1>
            <div>                
            <input type="email" value={email} name="email" placeholder="Enter your email" onChange={(event) => {this.handleChange(event)}}/>
            </div><br/>
            <div>                
            <input type="password" value={password} name="password" placeholder="Enter your password" onChange={(event) => {this.handleChange(event)}}/>
            </div><br/>
            <button>Submit</button>
            </form>
        )
    }
}

export default SignIn;