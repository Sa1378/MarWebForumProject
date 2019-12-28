import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";


class SignUp extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column justify-content-around my-5">
                    <TextField className="mx-5 my-2" id="outlined-basic" label="Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" id="outlined-basic" label="User Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" type="number" id="outlined-basic" label="Age"
                               variant="outlined"/>
                    <TextField className="mx-5 my-2" type="number" id="outlined-basic" label="telephone number"
                               variant="outlined"/>
                    <TextField className="mx-5 my-2" type="email" id="outlined-basic" label="E-mail"
                               variant="outlined"/>
                    <InputAdornments label="Password"/>
                    <InputAdornments label="Repeat Password"/>
                    <Button className="my-4" variant="contained" color="primary">Sign Up</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp