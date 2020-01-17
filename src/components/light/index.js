import React, { Component } from "react";
import "./style.css";

class Light extends Component {
    state = {
        //the light needs to know whether to start on or off
        opacity: { opacity: this.props.opacity },
        onOrOFf: this.props.onOrOFf
    };

    render() {
        return (
            <div className="light">
                <span className="circle" id={this.props.id}></span>
            </div>
        );
    }
}
export default Light;
