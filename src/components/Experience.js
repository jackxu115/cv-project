import React, {Component} from "react";
import { v4 as uuid } from "uuid";
import SchoolList from "./SchoolList";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {
                companyName: '',
                positionTitle: '',
                mainTask: '',
                dateFrom: '',
                dateUntil: '',
                id: uuid()
            },
            experiences: []
        }
    }

    changeCompanyName = event => {
        this.setState({experience: {...this.state.experience, companyName: event.target.value}})
    }
    changePositionTitle = event => {
        this.setState({experience: {...this.state.experience, positionTitle: event.target.value}})
    }
    changeMainTask = event => {
        this.setState({experience: {...this.state.experience, mainTask: event.target.value}})
    }
    changeDateFrom = event => {
        this.setState({experience: {...this.state.experience, dateFrom: event.target.value}})
    }
    changeDateUntil = event => {
        this.setState({experience: {...this.state.experience, dateUntil: event.target.value}})
    }

    onSubmitExperience = event => {
        this.props.parentCbClicked()
        this.setState({
            experiences: this.props.experiences
        }, () => {
            this.setState(prevState => ({
                experiences: [...prevState.experiences, this.state.experience],
                experience: {
                    companyName: '',
                    positionTitle: '',
                    mainTask: '',
                    dateFrom: '',
                    dateEnd: '',
                    id: uuid()
                }
            }), () => this.props.parentCbExperiences(this.state.experiences))
        })
    }

    render() {
        if (this.props.experienceDisplay) {
            return (
                <div className="experienceForm">
                    <form onSubmit={this.onSubmitExperience}>
                        <div className="experienceForm_item">
                            <label className="experienceForm_label">Company Name</label>
                            <input className="experienceForm_input" onChange={this.changeCompanyName} type="text"/>
                        </div>
                        <div className="experienceForm_item">
                            <label className="experienceForm_label">Position Title</label>
                            <input className="experienceForm_input" onChange={this.changePositionTitle} type="text"/>
                        </div>
                        <div className="experienceForm_item">
                            <label className="experienceForm_label">Main Task</label>
                            <input className="experienceForm_input" onChange={this.changeMainTask} type="text"/>
                        </div>
                        <div className="experienceForm_item">
                            <label className="experienceForm_label">Date From</label>
                            <input className="experienceForm_input" onChange={this.changeDateFrom} type="date"/>
                        </div>
                        <div className="experienceForm_item">
                            <label className="experienceForm_label">Date Until</label>
                            <input className="experienceForm_input" onChange={this.changeDateUntil} type="date"/>
                        </div>
                        <div className="experienceForm_item submit">
                            <button className="experienceSubmit_btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Experience