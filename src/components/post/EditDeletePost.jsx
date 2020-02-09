import React, {Component} from "react";
import TransitionsModal from "../TransitionsModal";

class EditDeletePost extends Component {

    render() {
        return (
            <React.Fragment>
                <TransitionsModal postPage={this.props.postPage} buttonName="editPost"/>
                <TransitionsModal postPage={this.props.postPage} buttonName="deletePost" />
            </React.Fragment>
        );
    }


}

export default EditDeletePost;