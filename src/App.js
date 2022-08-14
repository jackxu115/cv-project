import React, {Component} from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo"

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <GeneralInfo />
            </div>
        )
    }
}

export default App