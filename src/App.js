import React, {Component} from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo"
import EducationExp from "./components/EducationExp";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <GeneralInfo />
                <EducationExp />

            </div>
        )
    }
}

export default App