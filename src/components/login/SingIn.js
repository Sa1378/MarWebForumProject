import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";


class SingIn extends Component {

    render() {
        return (
            <div className="d-flex flex-column justify-content-around my-5">
                <TextField className="m-5 email_size" type="email" id="outlined-basic" label="E-mail"
                           variant="outlined"/>
                <InputAdornments label="Password"/>
                <Button className="my-5" variant="contained" color="primary">Sign In</Button>
            </div>
        );
    }


}

export default SingIn