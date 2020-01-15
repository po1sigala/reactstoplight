import React, { Component } from "react";
import Light from "../light";
import "./style.css";
class Stoplight extends Component {
    render() {
        return (
            <div className="stopGroup">
                <div className="stoplight">
                    <Light id="redLight" />
                    <Light id="yellowLight" />
                    <Light id="greenLight" />
                </div>
            </div>
        );
    }
}
export default Stoplight;
