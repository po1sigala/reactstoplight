import React, { Component } from "react";
import Light from "../light";
import "./style.css";
class Stoplight extends Component {
    state = {
        red: [this.props.red],
        yellow: "0.1",
        green: [this.props.green],
        litLight: [this.props.onLight]
    };
    componentDidMount() {
        setInterval(() => {
            console.log(
                `${this.state.litLight} is currently on changing to next light`
            );

            switch (this.state.litLight[0]) {
                case "red":
                    console.log(`red is on`);
                    //turn red off
                    this.setState({ red: "0.1" });
                    //turn green on
                    this.setState({ green: "1.0" });
                    this.setState({ litLight: "green" });
                    console.log(`the state of this scope is ${this.state}`);

                    break;
                case "yellow":
                    this.setState({ yellow: "0.1" });
                    this.setState({ red: "1.0" });
                    this.setState({ litLight: "red" });
                    break;
                case "green":
                    this.setState({ green: "0.1" });
                    this.setState({ yellow: "1.0" });
                    this.setState({ litLight: "yellow" });
                    break;
            }
            console.log(`changed light to ${this.state.litLight}`);
        }, 5000);
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
