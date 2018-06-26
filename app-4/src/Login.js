import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    displayUserName(val) {
        this.setState({
            userName: val
        })
        //console.log(this.setState.userName);
    }

    displayPassword(val) {
        this.setState({
            password: val
        })
        //console.log(this.setState.password);
    }

    handleLogin() {
        alert(`UserName: ${this.state.userName} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input className='user-name' type='text' placeholder='Enter UserName' onChange={e => this.displayUserName(e.target.value)} />
                <input className='password' type='text' placeholder='Enter Password' onChange={e => this.displayPassword(e.target.value)} />
                <div>
                    <button className='confirm' onClick={this.handleLogin}> Alert </button>
                </div>
            </div >
        );
    }
}

export default Login;