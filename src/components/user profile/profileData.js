import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Data = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center pb-4">
                    <h2>{props.name}</h2>
                </div>

                <div className='d-flex justify-content-between px-5 pb-3'>
                    <div className="d-flex flex-column">
                        <b>Posts</b>
                        <b className="d-flex justify-content-center">{props.numberOfPosts}</b>
                    </div>
                    <div className="d-flex flex-column">
                        <b>Followers</b>
                        <b className="d-flex justify-content-center">{props.numberOfFollower}</b>

                    </div>
                    <div className="d-flex flex-column">
                        <b>Following</b>
                        <b className="d-flex justify-content-center">{props.numberOfFollowing}</b>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );


};
export default Data


