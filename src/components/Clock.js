import React, {Component} from "react";
import FormattedDate from "./FormattedDate";

class Clock extends Component {
    state = {
        time: ''
    }

    componentDidMount() {
        this.countSecond()
    }

    countSecond() {
        setInterval(
            () => this.updateTime(), 1000
        )
    }

    updateTime() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    sendDataToApp = () => {
        this.props.parentCallback(this.state.time);
    }

    render() {
        return (
            <>
                <h1>{this.state.time}</h1>
                <FormattedDate dateAsProps={this.state.time}/>
                <button onClick={this.sendDataToApp}>parentCallback(this.state.time)</button>
            </>
        )
    }

}


export default Clock