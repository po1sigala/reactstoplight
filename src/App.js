import React, { Component } from "react";

import Jumbotron from "./components/jumbotron";
import Stoplight from "./components/stoplight";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron
                    subheader="below is an intesection controlled by two stoplights"
                    title="StopLight Simulator"
                />
                <Stoplight id="NS" red="On" green="Off" />
                <Stoplight id="EW" red="Off" green="On" />
            </div>
        );
    }
}

export default App;
