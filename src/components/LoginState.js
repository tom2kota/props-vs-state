import React, {Component} from "react";

class LoginState extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('%c 1) Login (State)', 'background: green; color: white; display: block;');
        console.log(`FORM SUBMITTED WITH: 
                     ${this.state.username} 
                     ${this.state.password}`)
    }

    render() {
        console.log('%c 1) Login (State)', 'background: green; color: white; display: block;', this.state);

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login (State)</h1>
                <div>
                    <div>
                        <input onChange={this.handleChangeUsername} value={this.state.username}
                               name="name"
                               type="text"
                               placeholder="username / email"
                        />
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} value={this.state.password}
                               name="password"
                               type="password"
                               placeholder="password"
                        />
                    </div>
                </div>

                <button type="submit">
                    Login
                </button>
            </form>
        );
    }
}

export default LoginState
