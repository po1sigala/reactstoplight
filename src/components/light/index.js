import React, { Component } from "react";
import "./style.css";

class Light extends Component {
    render() {
        return (
            <div className="light">
                <span className="circle" id={this.props.id}></span>
            </div>
        );
    }
}
export default Light;
