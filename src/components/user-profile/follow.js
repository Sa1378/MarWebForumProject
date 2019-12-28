import React, {Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";


class Follow extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='d-flex justify-content-center pb-4'>
                    {this.format}
                </div>
            </React.Fragment>
        );
    }

    format() {
        if (this.props.username === this.props.my_name) {
            return;
        } else {
            if (this.props.followed === false) {
                return <Button variant="contained" color="primary">Follow</Button>
            } else return <Button variant="contained" color="secondary">Unfollow</Button>
        }
    }

}
export default Follow


