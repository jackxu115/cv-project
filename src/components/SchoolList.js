import React, {Component} from "react";

class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: []
        }
    }

    deleteSchool = event => {
        const schools = this.props.schools
        console.log('schoolList before', schools)
        const deleteId = event.target.id
        this.setState({schools: schools.filter(school => school.id !== deleteId)},
            () => {
                console.log('schoolList after', this.state.schools)
                this.props.parentCbSchools(this.state.schools)
            })
    }

    render() {
        const schools = this.props.schools
        return (
            <div className="schoolDisplay">
                {schools.map((school) => {
                    return (
                        <div  key={school.id}>
                            <div className="schoolDisplay_item">
                                <label className="schoolDisplay_label">School Name:</label>
                                <p className="schoolDisplay_text">{school.schoolName}</p>
                            </div>
                            <div className="schoolDisplay_item">
                                <label className="schoolDisplay_label">Title of Study:</label>
                                <p className="schoolDisplay_text">{school.titleStudy}</p>
                            </div>
                            <div className="schoolDisplay_item">
                                <label className="schoolDisplay_label">Date of study:</label>
                                <p className="schoolDisplay_text">{school.dateStudy}</p>
                            </div>
                            <div className="schoolDisplay_item delete">
                                <button className="schoolDelete_btn" id={school.id} onClick={this.deleteSchool}>Delete</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default SchoolList

