import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";
import {Tooltip} from "@material-ui/core";

export var username=null;

class SignIn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.loginClick = this.loginClick.bind(this);
    }

    loginClick()
    {
        username=document.getElementById("usernameInput").value;
        localStorage.setItem("username",username)
        console.log("Username: "+username);
        window.location.href="/";
    }

    render() {
        return (
            <form className="d-flex flex-column justify-content-around my-5">

                <TextField className="m-5 email_size" type="email" id="usernameInput" label="E-mail"
                           variant="outlined" required />
                <InputAdornments label="Password" required/>
                <Button className="my-5" variant="contained" color="primary" onClick={this.loginClick}>Sign In</Button>
                <Tooltip title='first fill email input'>
                    <Button className="my-2" variant="" color="primary" >Forget Password</Button>
                </Tooltip>
            </form>
        );
    }


}

export default SignIn;