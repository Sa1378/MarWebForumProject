import React, {Component} from "react";
import TransitionsModal from "../TransitionsModal";


class CreateChannelButton extends Component {


    render() {
        return (
            <TransitionsModal accounts={this.props.accounts} content="channel" buttonName="create channel"
                              variant="contained"/>
        );
    }


}

export default CreateChannelButton;