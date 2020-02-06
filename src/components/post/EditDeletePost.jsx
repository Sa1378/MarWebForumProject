import React, {Component} from "react";
import TransitionsModal from "../TransitionsModal";

class EditDeletePost extends Component {

    render() {
        return (
            <React.Fragment>
                <TransitionsModal post={this.props.post} buttonName="editPost"/>
                <TransitionsModal buttonName="deletePost"deletePost/>
            </React.Fragment>
        );
    }


}

export default EditDeletePost;