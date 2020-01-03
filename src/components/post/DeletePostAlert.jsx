import React, {Component} from "react";
import Button from "@material-ui/core/Button";


class DeletePostAlert extends Component {


    render() {
        return (
            <React.Fragment>
                <Button type="submit" color="secondary" variant="contained" className="m-2"> Delete </Button>
                <Button color="primary" variant="contained" className="m-2"> Cancel </Button>
            </React.Fragment>
        );
    }


}

export default DeletePostAlert;