import React from "react";

const LoginPropsOne = (props) => (
    <form onSubmit={props.handleSubmit}>
        <h1>Login (Props #1)</h1>
        <div>
            <div>
                <input onChange={(event) => props.setUsername(event.target.value)} value={props.username}
                       name="name"
                       type="text"
                       placeholder="username / email"
                       required
                />
            </div>
            <div>
                <input onChange={(event) => props.setPassword(event.target.value)} value={props.password}
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
)

export default LoginPropsOne