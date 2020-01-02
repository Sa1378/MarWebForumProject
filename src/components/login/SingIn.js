import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";
import {Tooltip} from "@material-ui/core";


class SingIn extends Component {

    render() {
        return (
            <form className="d-flex flex-column justify-content-around my-5">

                <TextField className="m-5 email_size" type="email" id="outlined-basic" label="E-mail"
                           variant="outlined" required/>
                <InputAdornments label="Password"/>
                <Button className="my-5" variant="contained" color="primary">Sign In</Button>
                <Tooltip title='first fill email input'>
                    <Button className="my-2" variant="" color="primary">Forget Password</Button>
                </Tooltip>
            </form>
        );
    }


}

export default SingIn