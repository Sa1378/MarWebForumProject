import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Data extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center pb-4">
                        <h2>{this.props.name}</h2>
                    </div>

                    <div className='d-flex justify-content-between px-5 pb-3'>
                        <div className="d-flex flex-column">
                            <b>Posts</b>
                            <b className="d-flex justify-content-center">{this.props.numberOfPosts}</b>
                        </div>
                        <div className="d-flex flex-column">
                            <b>Followers</b>
                            <b className="d-flex justify-content-center">{this.props.numberOfFollower}</b>

                        </div>
                        <div className="d-flex flex-column">
                            <b>Following</b>
                            <b className="d-flex justify-content-center">{this.props.numberOfFollowing}</b>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}
export default Data


