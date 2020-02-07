import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Tooltip} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.loginClick = this.loginClick.bind(this);
    }

    state = {
        loginSuccess: false,
        loginFail: false,
    };

    loginClick() {
        var currentComponent = this;
        var data = {
            'username': document.getElementById("username").value,
            'password': document.getElementById("password").value
        }
        console.log(JSON.stringify(data))
        fetch("http://localhost:8000/account/login", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Access-Control-Origin": "*"},
            body: JSON.stringify(data)
        })
            .then(function (response) {
                console.log(response)
                if (response.ok) {
                    console.log(response)
                    console.log("access-token: " + localStorage.getItem("access-token"));
                    //
                    return response.json();
                }
                currentComponent.setState({loginFail: true})
                throw new Error("Server Error!");
            })
            .then(function (data) {
                console.log(data)
                localStorage.setItem("refresh-token", data.refresh)
                localStorage.setItem("access-token", data.access)
                localStorage.setItem("username", document.getElementById("username").value)
                currentComponent.setState({loginSuccess: true});
                fetch('http://localhost:8000/account/profile/' + localStorage.getItem("username"), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Origin": "*",
                        'Authorization': 'Bearer ' + localStorage.getItem("access-token")
                    }
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Server Error!");
                    })
                    .then(function (data) {
                        console.log(data);
                        localStorage.setItem("userId", data.user.id);

                        window.location.href = "/"
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    forgetPassword() {
        let currentComponent = this;
        console.log(document.getElementById("password-reset-email").value, "<==============");
        let data = {
            'email': document.getElementById("password-reset-email").value,
        }
        console.log(JSON.stringify(data))
        fetch("http://localhost:8000/account/password/reset", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Access-Control-Origin": "*"},
            body: JSON.stringify(data)
        })
            .then(function (response) {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                    alert("Password reset link has been sent to your email")
                }
            )
            .catch(function (err) {
                console.log(err);
                alert("Email not found!")
            })

    }

    render() {
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.setState({loginSuccess: false, loginFail: false})
        }
        return (
            <form className="d-flex flex-column justify-content-around my-5">
                <Snackbar open={this.state.loginSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        You logged in successfully as {localStorage.getItem("username")}!
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.loginFail} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        Your username or password are incorrect!
                    </Alert>
                </Snackbar>
                <TextField className="m-5 email_size" type="text" id="username" label="Username"
                           variant="outlined" required/>
                <TextField className="m-5 email_size" type="password" id="password" label="Password"
                           variant="outlined" required/>
                <Button className="my-5" variant="contained" color="primary" onClick={this.loginClick}>Sign In</Button>
                <TextField className="" type="email" id="password-reset-email" label="E-mail"
                           variant="outlined" required/>
                <Tooltip title='first fill email input'>
                    <Button  className="my-2" variant="" color="primary"
                            onClick={this.forgetPassword}>Forget
                        Password</Button>
                </Tooltip>
            </form>
        );
    }


}

export default SignIn;