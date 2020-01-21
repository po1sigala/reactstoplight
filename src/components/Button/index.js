import React, { Component } from "react";
import "./style.css";
import { ButtonToolbar, Button } from "react-bootstrap";
import API from "../../utils/API";

class Switch extends Component {
    stopLights = () => {
        console.log(`clicked button class ${this.props.className}`);
    };

    render() {
        return (
            <div>
                <div className="buttonDiv">
                    <ButtonToolbar>
                        <Button variant="danger" onClick={this.stopLights}>
                            Danger
                        </Button>
                    </ButtonToolbar>
                </div>

                <div className="gifDiv"></div>
            </div>
        );
    }
}
export default Switch;
