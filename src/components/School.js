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
    // componentDidMount() {
    //     this.setState({
    //         schools: this.props.schools
    //     })
    // }

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

        // this.setState(prevState => ({
        //     schools: [...prevState.schools, this.state.school],
        //     school: {
        //         schoolName: '',
        //         titleStudy: '',
        //         dateStudy: '',
        //         id: uuid()
        //     }
        // }), () => this.props.parentCbSchools(this.state.schools))

        event.preventDefault()
    }

    render() {
        if (this.props.schoolDisplay) {
            return (
                <div>
                    <form onSubmit={this.onSubmitSchool}>
                        <div>
                            <label>School Name</label>
                            <input onChange={this.changeSchoolName} type="text"/>
                        </div>
                        <div>
                            <label>Title of Study</label>
                            <input onChange={this.changeTitleStudy} type="text"/>
                        </div>
                        <div>
                            <label>Date of study</label>
                            <input onChange={this.changeDateStudy} type="date"/>
                        </div>
                        <button type="submit">Submit</button>
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