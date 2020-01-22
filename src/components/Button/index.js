import React, { Component } from "react";
import "./style.css";
import { ButtonToolbar, Button } from "react-bootstrap";
import API from "../../utils/API";

class Switch extends Component {
    state = {
        buttonName: "stopOrGO",
        lightsRunning: true,
        results: [],
        search: ""
    };
    constructor(props) {
        super(props);
        this.searchGiphy = this.searchGiphy.bind(this);
    }
    componentDidMount() {
        this.searchGiphy("GO");
    }
    searchGiphy = query => {
        console.log(`searching giphy`);
        API.search(query)
            .then(res => {
                console.log(res);
                this.setState({
                    results: res.data.data[0].images.original.url
                });
                console.log(this.state.results);
            })
            .catch(err => console.log(err));
    };

    stopLights = () => {
        console.log(`clicked button class ${this.props.className}`);
        if (this.state.lightsRunning === true) {
            console.log("searcing giphy for stop");
            this.setState({ lightsRunning: false });
            this.searchGiphy("STOP");
        } else if (this.state.lightsRunning === false) {
            this.setState({ lightsRunning: true });
            this.searchGiphy("GO");
        }
    };

    render() {
        return (
            <div>
                <div className="buttonDiv">
                    <ButtonToolbar>
                        <Button
                            variant="danger"
                            search={this.state.search}
                            onClick={this.stopLights}
                        >
                            make a gif
                        </Button>
                    </ButtonToolbar>
                </div>

                <div className="gifDiv">
                    <img src={this.state.results}></img>
                </div>
            </div>
        );
    }
}
export default Switch;
