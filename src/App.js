import React, { Component } from "react";

import Jumbotron from "./components/jumbotron";
import Stoplight from "./components/stoplight";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron
                    subheader="below is an intesection controlled by two stoplights on a 3 second interval"
                    title="StopLight Simulator"
                />
                <Stoplight id="NS" red="1" green="0.1" onLight="red" />
                <Stoplight id="EW" red="0.1" green="1" onLight="green" />
            </div>
        );
    }
}

export default App;
