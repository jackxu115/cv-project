import React, {Component} from "react";
import EditGeneralInfo from "./EditGeneralInfo";

class GeneralInfo extends Component {
    render() {
        return (
            <div>
                <h2>General Information</h2>
                <EditGeneralInfo inputText="First Name" buttonText="Edit" displayMethod="0" />
                <EditGeneralInfo inputText="Last Name" buttonText="Edit" displayMethod="0" />
                <EditGeneralInfo inputText="Email Address" buttonText="Edit" displayMethod="0" />
                <EditGeneralInfo inputText="Phone Number" buttonText="Edit" displayMethod="0" />
                <hr/>
            </div>
        )
    }
}

export default GeneralInfo