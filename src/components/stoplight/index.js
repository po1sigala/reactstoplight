import React, { Component } from "react";
import Light from "../light";
import "./style.css";
class Stoplight extends Component {
    state = {
        red: [this.props.red],
        yellow: "0.1",
        green: [this.props.green],
        litLight: [this.props.onLight],
        interval: 3000
    };
    componentDidMount() {
        setInterval(() => {
            console.log(`litlight is ${this.state.litLight[0]}`);
            switch (this.state.litLight[0]) {
                case "red":
                    //wait an interval so the yellow light can catch up
                    this.setState({ litLight: ["pause"] });

                    break;
                case "pause":
                    console.log("changing to green");
                    this.setState({ red: "0.1" });
                    //turn green on
                    this.setState({ green: "1.0" });
                    this.setState({ litLight: ["green"] });
                    break;
                case "yellow":
                    this.setState({ yellow: "0.1" });
                    this.setState({ red: "1.0" });
                    this.setState({ litLight: ["red"] });
                    break;
                case "green":
                    this.setState({ green: "0.1" });

                    this.setState({ yellow: "1.0" });
                    this.setState({ litLight: ["yellow"] });
                    break;
            }
        }, this.state.interval);
    }
    render() {
        //tell each light whther to start on or start off
        return (
            <div className="stopGroup">
                <div className="stoplight">
                    <div style={{ opacity: this.state.red }}>
                        <Light id="redLight" opacity={this.state.red} />
                    </div>
                    <div style={{ opacity: this.state.yellow }}>
                        <Light id="yellowLight" />
                    </div>
                    <div style={{ opacity: this.state.green }}>
                        <Light id="greenLight" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Stoplight;
