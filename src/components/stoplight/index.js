import React, { Component } from "react";
import Light from "../light";
import "./style.css";
class Stoplight extends Component {
    render() {
        return (
            <div className="stopGroup">
                <div className="stoplight">
                    <Light id="redLight" onOrOff={this.props.red} />
                    <Light id="yellowLight" onOrOff="Off" />
                    <Light id="greenLight" onOrOff={this.props.green} />
                </div>
            </div>
        );
    }
}
export default Stoplight;
