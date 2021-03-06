import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TransitionsModal from "../TransitionsModal";


class EditDeleteComment extends Component {
    render() {
        return (
            <React.Fragment>
                <TransitionsModal comment={this.props.comment} postPage={this.props.postPage} buttonName="editComment"/>
                <TransitionsModal comment={this.props.comment} postPage={this.props.postPage} buttonName="deleteComment"/>
            </React.Fragment>
        );
    }


}

export default EditDeleteComment;