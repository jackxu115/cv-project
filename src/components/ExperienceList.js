import React, {Component} from "react";

class ExperienceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        }
    }

    deleteExperience = event => {
        const experiences = this.props.experiences
        const deleteId = event.target.id
        this.setState({experiences: experiences.filter(experience => experience.id !== deleteId)},
            () => {
            this.props.parentCbExperiences(this.state.experiences)
            })
    }

    render() {
        const experiences = this.props.experiences
        return (
            <div className="experienceDisplay">
                {experiences.map((experience) => {
                    return (
                        <div  key={experience.id}>
                            <div className="experienceDisplay_item">
                                <label className="schoolDisplay_label">Company Name:</label>
                                <p className="experienceDisplay_text">{experience.companyName}</p>
                            </div>
                            <div className="experienceDisplay_item">
                                <label className="schoolDisplay_label">Position Title:</label>
                                <p className="experienceDisplay_text">{experience.positionTitle}</p>
                            </div>
                            <div className="experienceDisplay_item">
                                <label className="schoolDisplay_label">Main Task:</label>
                                <p className="experienceDisplay_text">{experience.mainTask}</p>
                            </div>
                            <div className="experienceDisplay_item">
                                <label className="schoolDisplay_label">Date From:</label>
                                <p className="experienceDisplay_text">{experience.dateFrom}</p>
                            </div>
                            <div className="experienceDisplay_item">
                                <label className="schoolDisplay_label">Date Until:</label>
                                <p className="experienceDisplay_text">{experience.dateUntil}</p>
                            </div>
                            <div className="experienceDisplay_item delete">
                                <button className="experienceDelete_btn" id={experience.id} onClick={this.deleteExperience}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default ExperienceList