import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";
import TransitionsModal from "../TransitionsModal";


class Data extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center pb-4">
                        <h2>{this.props.name}</h2>
                    </div>
                    <div className='d-flex justify-content-around pl-5 pb-3'>
                        <div className="d-flex flex-column">
                            <Button>Posts</Button>
                            <b className="d-flex justify-content-center">{this.props.numberOfPosts}</b>
                        </div>
                        <div className="d-flex flex-column">
                            <TransitionsModal content="account" buttonName="follower" variant=""
                                              follower={this.props.follower}/>
                            <b className="d-flex justify-content-center">{this.props.numberOfFollower}</b>
                        </div>
                        <div className="d-flex flex-column">
                            <TransitionsModal content="account" buttonName="following" variant=""
                                              following={this.props.following}/>
                            <b className="d-flex justify-content-center">{this.props.numberOfFollowing}</b>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}

export default Data


