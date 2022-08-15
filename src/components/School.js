import React, {Component} from "react";
import { v4 as uuid } from "uuid";

class School extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: {
                schoolName: '',
                titleStudy: '',
                dateStudy: '',
                id: uuid()
            },
            schools: []
        }
    }

    changeSchoolName = event => {
        this.setState({school: {...this.state.school, schoolName: event.target.value}})
    }

    changeTitleStudy = event => {
        this.setState({school: {...this.state.school, titleStudy: event.target.value}})
    }

    changeDateStudy = event => {
        this.setState({school: {...this.state.school, dateStudy: event.target.value}})
    }

    onSubmitSchool = event => {
        this.props.parentCbClicked()
        console.log(this.props.schools)

        this.setState({
            schools: this.props.schools
        }, () => {
            this.setState(prevState => ({
                schools: [...prevState.schools, this.state.school],
                school: {
                    schoolName: '',
                    titleStudy: '',
                    dateStudy: '',
                    id: uuid()
                }
            }), () => this.props.parentCbSchools(this.state.schools))
        })
        event.preventDefault()
    }

    render() {
        if (this.props.schoolDisplay) {
            return (
                <div className="schoolForm">
                    <form onSubmit={this.onSubmitSchool}>
                        <div className="schoolForm_item">
                            <label className="schoolForm_label">School Name</label>
                            <input className="schoolForm_input" onChange={this.changeSchoolName} type="text"/>
                        </div>
                        <div className="schoolForm_item">
                            <label className="schoolForm_label">Title of Study</label>
                            <input className="schoolForm_input" onChange={this.changeTitleStudy} type="text"/>
                        </div>
                        <div className="schoolForm_item">
                            <label className="schoolForm_label">Date of study</label>
                            <input className="schoolForm_input" onChange={this.changeDateStudy} type="date"/>
                        </div>
                        <div className="schoolForm_item submit">
                            <button className="schoolSubmit_btn" type="submit">Submit</button>
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

export default School