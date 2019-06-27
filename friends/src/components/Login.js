import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            credentials: {
                username:'',
                password:''
            }
        }
    }

    onChange = e =>{
        console.log(e.target.value);
        this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }})
    }

    handleLogin = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
          .then(() => this.props.history.push("/protected"));
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleLogin}>
                    <input type='text'
                        placeholder='username'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.onChange}>
                    </input>
                    <input type='text'
                        placeholder='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.onChange}>
                    </input>
                    <button>Log in</button>
                </form>

            </div>
        )
    }
}

export default connect(
    null,
    { login }
  )(Login);
  