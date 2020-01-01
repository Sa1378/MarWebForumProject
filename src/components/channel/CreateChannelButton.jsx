import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {Link, NavLink} from "react-router-dom";
import TransitionsModal from "../TransitionsModal";


class CreateChannelButton extends Component {


    render() {
        return (
            <TransitionsModal content="channel" buttonName="create channel" variant="contained"/>
        );
    }


}

export default CreateChannelButton;