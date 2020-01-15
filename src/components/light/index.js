import React, { Component } from "react";
import "./style.css";

class Light extends Component {
    state = {
        onOrOff: [this.props.onOrOff]
    };

    render() {
        return (
            <div className="light">
                <span
                    className="circle"
                    id={this.props.id + this.state.onOrOff}
                ></span>
            </div>
        );
    }
}
export default Light;
