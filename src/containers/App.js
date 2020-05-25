import React, {Component} from 'react';
import Clock from "../components/Clock";
import LoginState from "../components/LoginState";
import LoginStateHooks from "../components/LoginStateHooks";
import LoginPropsOne from "../components/LoginPropsOne";
import LoginPropsTwo from "../components/LoginPropsTwo";
import LoginLayout from "../components/LoginLayout";

import './App.css';


class App extends Component {

    callbackFunction = (childData) => {
        alert(`From parent App component, childData = ${childData}`)
        this.setState({
            dataStore: childData
        })
    }

    render() {
        console.log('%c 0) App (State)', 'background: gray; color: white; display: block;');
        console.log('App (state):', this.state);
        console.log('App (props):', this.props);

        return (
            <div className="App">
                <Clock parentCallback={this.callbackFunction}/>
                <br/>
                <br/>
                <LoginState/>
                <br/>
                <br/>
                <LoginStateHooks/>
                <br/>
                <br/>
                <LoginPropsOne/>
                <br/>
                <br/>
                <LoginPropsTwo/>
                <br/>
                <br/>
                <LoginLayout/>
            </div>
        );
    }
}

export default App;