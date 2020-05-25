// https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks
import React, {useState} from "react";

const LoginStateHooks = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleChangeUsername = (event) => {
        console.log('%c 2) Login (State + Hooks)', 'background: blue; color: white; display: block;')
        console.log('hooks username event.target.value:', event.target.value);
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        console.log('%c 2) Login (State + Hooks)', 'background: blue; color: white; display: block;')
        console.log('hooks password event.target.value:', event.target.value);
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('%c 2) Login (State + Hooks)', 'background: blue; color: white; display: block;');
        console.log(`FORM SUBMITTED WITH: 
                     ${username} 
                     ${password}`)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>Login (Hooks)</h1>
            <div>
                <div>
                    <input onChange={handleChangeUsername} value={username}
                           name="name"
                           type="text"
                           placeholder="username / email"
                           required
                    />
                </div>
                <div>
                    <input onChange={handleChangePassword} value={password}
                           name="password"
                           type="password"
                           placeholder="password"
                           required
                    />
                </div>
            </div>

            <button type="submit">
                Login
            </button>
        </form>
    );

}

export default LoginStateHooks
