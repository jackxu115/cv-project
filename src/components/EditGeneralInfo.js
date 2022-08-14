import React, {Component} from "react";

class EditGeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: this.props.inputText,
            buttonText: this.props.buttonText,
            displayMethod: this.props.displayMethod
        }
    }

    onClickEdit = event => {
        event.preventDefault()
        this.setState({
            displayMethod: "1"
        })
    }

    onClickDisplay = event => {
        event.preventDefault()
        this.setState({
            displayMethod: "0"
        })
    }

    handleChange = event => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {

        if (this.state.displayMethod === "0") {
            return (
                <div>
                    <label>{this.state.inputText}</label>
                    <button onClick={this.onClickEdit}>{this.state.buttonText}</button>
                </div>
            )
        } else {
            return (
                <div>
                    <input placeholder={this.state.inputText} onChange={this.handleChange} type="text"/>
                    <button onClick={this.onClickDisplay}>Save</button>
                </div>
            )
        }
    }
}

export default EditGeneralInfo