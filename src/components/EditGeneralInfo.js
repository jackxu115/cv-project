import React, {Component} from "react";

class EditGeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: this.props.inputText,
            buttonText: this.props.buttonText
        }
    }

    onClickEdit = event => {
        event.preventDefault()
        this.setState({
            displayMethod: "1"
        })
    }

    handleChange = event => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div className="general_info">
                <label className="general_label">{this.state.inputText}</label>
                <button className="general_btn" onClick={this.onClickEdit}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default EditGeneralInfo