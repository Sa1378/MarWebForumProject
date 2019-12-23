import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";


const Follow = (props) => {
    return (
        <React.Fragment>
            <div className='d-flex justify-content-center pb-4'>
            {format(props)}
            </div>
        </React.Fragment>
    );

    function format(props) {
        if (props.username === props.my_name) {
            return;
        } else {
            if (props.followed === false) {
                return <Button variant="contained" color="primary">Follow</Button>
            } else return <Button variant="contained" color="secondary">Unfollow</Button>
        }
    }

};
export default Follow


