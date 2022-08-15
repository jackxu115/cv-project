import React, {Component} from "react";
import School from "./School";
import SchoolList from "./SchoolList";


class EducationAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMethod: this.props.displayMethod,
            schoolDisplay: false,
            addBtnClicked: true,
            schools: []
        }
    }

    addSchool = event => {
        event.preventDefault()
        this.setState({
            addBtnClicked: false,
            schoolDisplay: true
        })
    }

    handleCbClicked = () => {
        this.setState({
            addBtnClicked: true,
            schoolDisplay: false
        })
    }

    handleCbSchools = childData => {
        console.log('schoolList in school component', childData)
        this.setState({
            schools: childData
        })
    }

    render() {
        return (
            <div>
                <SchoolList
                    schools={this.state.schools}
                    parentCbSchools={this.handleCbSchools}
                />
                {
                    this.state.addBtnClicked ?
                        <button onClick={this.addSchool}>Add</button>
                        :
                        <div></div>
                }
                <School
                    parentCbClicked={this.handleCbClicked}
                    parentCbSchools={this.handleCbSchools}
                    schoolDisplay={this.state.schoolDisplay}
                    schools = {this.state.schools}
                />
            </div>
        )
    }
}

export default EducationAdd