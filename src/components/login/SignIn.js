import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";
import {Tooltip} from "@material-ui/core";


class SignIn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.loginClick = this.loginClick.bind(this);
    }

    loginClick()
    {
        var data={'username':document.getElementById("username").value,
                    'password':document.getElementById("password").value}
        console.log(JSON.stringify(data))
        fetch("http://localhost:8000/account/login", {
                method: "POST",
                headers: {"Content-Type": "application/json", "Access-Control-Origin": "*"},
                body:  JSON.stringify(data)
        })
        .then(function(response){ 
            console.log(response)
            if(response.status=="200"){
                console.log(response)
                console.log("access-token: "+localStorage.getItem("access-token"));
                //
                return response.json();
            }
            alert("Your Username or Password are incorrect!")
            throw new Error("Server Error!");
        })
        .then(function(data){
            console.log(data)
            localStorage.setItem("refresh-token",data.refresh)
            localStorage.setItem("access-token",data.access)
            localStorage.setItem("username",document.getElementById("username").value)
            fetch('http://localhost:8000/account/profile/' + localStorage.getItem("username"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
                }
            })
            .then(function (response) {
                console.log(response)
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                console.log(data)
                localStorage.setItem("userId",data.user.id); 
            })
            .catch(function (err) {
                //TODO
                console.log(err);
            })
            window.location.href="/"
        })
        .catch(function (err) {
            //TODO
            console.log(err);
        })
    }

    render() {
        return (
            <form className="d-flex flex-column justify-content-around my-5">

                <TextField className="m-5 email_size" type="text" id="username" label="Username"
                           variant="outlined" required />
                <TextField className="m-5 email_size" type="password" id="password" label="Password"
                           variant="outlined" required />
                <Button className="my-5" variant="contained" color="primary" onClick={this.loginClick}>Sign In</Button>
                <TextField className="" type="email" id="usernameInput" label="E-mail"
                           variant="outlined" required />
                <Tooltip title='first fill email input'>
                    <Button className="my-2" variant="" color="primary" >Forget Password</Button>
                </Tooltip>
            </form>
        );
    }


}

export default SignIn;