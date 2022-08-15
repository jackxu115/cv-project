import React, {Component} from "react"
import Header from "./components/Header"
import GeneralInfo from "./components/GeneralInfo"
import EducationExp from "./components/EducationExp"
import PracticalExp from "./components/PracticalExp";
import './styles/app.css'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Header />
                <GeneralInfo />
                <EducationExp />
                <PracticalExp />
            </div>
        )
    }
}

export default App