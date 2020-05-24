import React, {Component} from "react";
import './Login.css';

class Login extends Component {
    render() {
        return (
            <form>
                <h1>Login</h1>
                <div>
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className='input'/>
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
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

export default Login
