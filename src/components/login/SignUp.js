import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "../Password";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


class SignUp extends Component {

    constructor(props){
        super(props);
        this.singupClick=this.singupClick.bind(this);
    }

    state={
        signupSuccess:false,
        signupFail:false,
        errors:"",
        errorsNum:0
    }

    singupClick(){
        var currentComponent=this;
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
            if(response.ok){
                currentComponent.setState({signupSuccess:true});
                window.location.href = "/login";
            }
            else{
                return response.json();
            }
        })
        .then(function(data){
            console.log(data)
            var errorsNum=0;
            var str=""
            var errors=["username","age","telephone_number","email","password","repeat_password"]
            for(let i=0;i<errors.length;i++){
                var error=errors[i];
                if(data.detail.includes(error)){
                    if(str.length)str+=", ";
                    str+=error;
                    errorsNum++;
                }
            }
            currentComponent.setState({signupFail:true,errors:str,errorsNum:errorsNum});
        });
    }

    render() {
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            this.setState({signupSuccess:false,signupFail:false,errors:"",errorsNum:0})
        }
        return (
            <React.Fragment>
                <Snackbar open={this.state.signupSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Your account was singed up successfully!
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.signupFail} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        Your {this.state.errors} {(this.state.errorsNum>1)?"are":"is"} invalid!
                    </Alert>
                </Snackbar>
                <div className="d-flex flex-column justify-content-around my-5">
                    <TextField className="mx-5 my-2" id="firstName" label="First Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" id="lastName" label="Last Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" id="username" label="User Name" variant="outlined"/>
                    <TextField className="mx-5 my-2" type="number" id="age" label="Age"
                               variant="outlined"/>
                    <TextField className="mx-5 my-2" type="number" id="telephoneNumber" label="Telephone Number"
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