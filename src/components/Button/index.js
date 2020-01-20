import React, { Component } from "react";
import "./style.css";
import { ButtonToolbar, Button } from "react-bootstrap";

class Switch extends Component {
    stopLights = () => {
        console.log(`clicked button class ${this.props.className}`);
    };
    render() {
        return (
            <div className="buttonDiv">
                <ButtonToolbar>
                    <Button variant="danger" onClick={this.stopLights}>
                        Danger
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
export default Switch;
