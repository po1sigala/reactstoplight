import React, { Component } from "react";
import "./style.css";

class Light extends Component {
    state = {
        //the light needs to know whether to start on or off
        opacity: { opacity: this.props.opacity },
        onOrOFf: "on"
    };
    componentDidMount() {
        setTimeout(() => {
            console.log(
                `changing color ${this.props.id} is currently ${this.state.onOrOFf}`
            );
        }, 3000);
    }

    render() {
        return (
            <div className="light">
                <span
                    className="circle"
                    style={this.state.opacity}
                    id={this.props.id}
                ></span>
            </div>
        );
    }
}
export default Light;
