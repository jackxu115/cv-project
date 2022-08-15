import React, {Component} from "react";
import Experience from "./Experience";
import ExperienceList from "./ExperienceList";


class PracticalAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experienceDisplay: false,
            addBtnClicked: true,
            experiences: []
        }
    }

    addExperience = event => {
        event.preventDefault()
        this.setState({
            addBtnClicked: false,
            experienceDisplay: true
        })
    }

    handleCbClicked = () => {
        this.setState({
            addBtnClicked: true,
            experienceDisplay: false
        })
    }

    handleCbExperiences = childData => {
        this.setState({
            experiences: childData
        })
    }

    render() {
        return (
            <div>
                <ExperienceList
                    experiences = {this.state.experiences}
                    parentCbExperiences = {this.handleCbExperiences}
                />
                {
                    this.state.addBtnClicked ?
                        <button className="experienceAdd_btn" onClick={this.addExperience}>Add</button>
                        :
                        <div></div>
                }
                <Experience
                    parentCbClicked = {this.handleCbClicked}
                    parentCbExperiences = {this.handleCbExperiences}
                    experienceDisplay = {this.state.experienceDisplay}
                    experiences = {this.state.experiences}


                />
            </div>
        )
    }
}


export default PracticalAdd