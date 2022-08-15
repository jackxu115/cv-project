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
        })
    }

    render() {
        const schools = this.props.schools
        console.log(this.context.value)
        return (
            <div>
                {schools.map((school) => {
                    return (
                        <div key={school.id}>
                            <div>
                                <label>School Name:</label>
                                <p>{school.schoolName}</p>
                            </div>
                            <div>
                                <label>Title of Study:</label>
                                <p>{school.titleStudy}</p>
                            </div>
                            <div>
                                <label>Date of study:</label>
                                <p>{school.dateStudy}</p>
                            </div>
                            <button id={school.id} onClick={this.deleteSchool}>Delete</button>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default SchoolList

