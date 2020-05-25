import React from "react";

const LoginPropsTwo = (props) => {

    const {username, password, onSubmit, setUsername, setPassword} = props;
    console.log('%c 4) Login (Props)', 'background: orange; color: white; display: block;')
    console.log('LoginPropsTwo PROPS: ', props);
    console.log('LoginPropsTwo PROPS (username): ', username);
    console.log('LoginPropsTwo PROPS (password): ', password);

    return (
        <form onSubmit={onSubmit}>
            <h1>Login (Props #2)</h1>
            <div>
                <div>
                    <input onChange={(event) => setUsername(event.target.value)} value={username}
                           name="name"
                           type="text"
                           placeholder="username / email"
                           required
                    />
                </div>
                <div>
                    <input onChange={(event) => setPassword(event.target.value)} value={password}
                           name="password"
                           type="password"lu
                           placeholder="password"
                           required
                    />
                </div>
            </div>

            <button type="submit">
                Login
            </button>
        </form>
    )
}

export default LoginPropsTwo