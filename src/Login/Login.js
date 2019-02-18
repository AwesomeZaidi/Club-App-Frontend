import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div>
            <form className="login-form">
                <input type="text" name="email" value="Email"/>
                <input type="password" name="password" value="Password"/>
                <button>Submit</button>
            </form>
        </div>
    );
  }
}

export default Login;
