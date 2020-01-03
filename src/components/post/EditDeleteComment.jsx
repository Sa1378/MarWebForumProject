import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TransitionsModal from "../TransitionsModal";


class EditDeleteComment extends Component {
    render() {
        return (
            <React.Fragment>
                <TransitionsModal post={this.props.comment} buttonName="editComment"/>
                <TransitionsModal buttonName="deleteComment"/>
            </React.Fragment>
        );
    }


}

export default EditDeleteComment;