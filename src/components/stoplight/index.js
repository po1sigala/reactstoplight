import React, { Component } from "react";
import Light from "../light";
import "./style.css";
class Stoplight extends Component {
    state = {
        red: [this.props.red],
        yellow: "0.1",
        green: [this.props.green]
    };

    render() {
        //tell each light whther to start on or start off
        return (
            <div className="stopGroup">
                <div className="stoplight">
                    <Light id="redLight" opacity={this.state.red} />
                    <Light id="yellowLight" opacity={this.state.yellow} />
                    <Light id="greenLight" opacity={this.state.green} />
                </div>
            </div>
        );
    }
}
export default Stoplight;
