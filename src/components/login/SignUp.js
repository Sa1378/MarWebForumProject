import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";


class SignUp extends Component {

    singupClick(){
        var data={'email':document.getElementById("email").value,
                    'username':document.getElementById("username").value,
                    'password':document.getElementById("password").value,
                    'repeat_password':document.getElementById("repeatPassword").value,
                    'age':document.getElementById("age").value,
                    'telephone_number':document.getElementById("telephoneNumber").value,
                    'first_name':document.getElementById("firstName").value,
                    'last_name':document.getElementById("lastName").value}
        console.log(JSON.stringify(data))
        fetch("http://localhost:8000/account/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json", "Access-Control-Origin": "*"},
                body:  JSON.stringify(data)
        })
        .then(function(response){ 
            console.log(response)
            if(response.status=="200"){
                window.location.href = "/login";
                return ;
            }
            return response.json();
        })
        .then(function(data){
            console.log(data)
            alert(data.detail)

        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column justify-content-around my-5">
                    <TextField className="mx-5 my-2" id="firstName" label="First Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" id="lastName" label="Last Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" id="username" label="User Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" type="number" id="age" label="Age"
                               variant="outlined"/>
                    <TextField className="mx-5 my-2" type="number" id="telephoneNumber" label="telephone number"
                               variant="outlined"/>
                    <TextField className="mx-5 my-2" type="email" id="email" label="E-mail"
                               variant="outlined"/>
                    <TextField className="mx-5 my-2" type="password" id="password" label="Password" variant="outlined"/>
                    <TextField className="mx-5 my-2" type="password" id="repeatPassword" label="Repeat Password" variant="outlined"/>
                    <Button className="my-4" variant="contained" color="primary" onClick={this.singupClick}>Sign Up</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp