import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornments from "../Password";
import {withStyles} from '@material-ui/core/styles';
import '../../static/css/material.css'

const styles = theme => ({
    fileButton:{
        marginLeft:"50px",
    },
    button1:{
        marginTop:"-50px",
        marginBottom:"20px",
    },
    button2:{
        marginTop:"-120px",
    }
});

class EditProfile extends Component {
    constructor(props){
        super(props);
        this.editProfile=this.editProfile.bind(this);
        this.editPassword=this.editPassword.bind(this);
    }

    editProfile(){
        //console.log(localStorage.getItem("userId"))
        const formData = new FormData();
        formData.append('id',localStorage.getItem("userId"))
        if(document.getElementById("firstName"))formData.append('first_name', document.getElementById("firstName").value)
        if(document.getElementById("lastName"))formData.append('last_name', document.getElementById("lastName").value)
        if(!isNaN(document.getElementById("age")))formData.append('age', parseInt(document.getElementById("age").value))
        if(document.getElementById("email"))formData.append('email', document.getElementById("email").value)
        if(document.getElementById("telephoneNumber"))formData.append('telephone_number', document.getElementById("telephoneNumber").value)
        formData.append('image',null)
        if(document.getElementById("image"))formData.append('image', document.getElementById("image").files[0])
     //   if(!isNaN(document.getElementById("age")))//console.log("dsdsa");
        ////console.log(formData.get("first_name"))
        ////console.log(data);
        ////console.log(JSON.stringify(data))
        fetch('http://localhost:8000/account/profile-update', {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            },
            body: formData
        })
        .then(function (response) {
            //console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function (data) {
            //console.log(data);
            window.location.href = "/profile/"+localStorage.getItem("username");
        })
        .catch(function (err) {
            //console.log(err);
        })
    }

    editPassword(){
        const formData = new FormData();
        formData.append('password', document.getElementById("password").value)
        formData.append('new_password', document.getElementById("newPassword").value)
        formData.append('repeat_new_password', parseInt(document.getElementById("repeatNewPassword").value))
        ////console.log(data);
        ////console.log(JSON.stringify(data))
        fetch('http://localhost:8000/account/password-update', {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            },
            body: formData
        })
        .then(function (response) {
            //console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function (data) {
            //console.log(data);
            window.location.href = "/login";
        })
        .catch(function (err) {
            //console.log(err);
        })
    }

    render() {
        const {classes}=this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container  className={classes.outline}>
                    <Typography component="div" style={{backgroundColor: 'white', height: '57vh'}}>
                        <form autoComplete="on">
                            <div className="p-3">
                                <h4 className="d-flex justify-content-center">Edit Profile</h4>
                                <TextField className="mx-5" id="firstName" label="First Name" variant="outlined"/>
                                <TextField className="mx-5" id="lastName" label="Last Name" variant="outlined"/>
                                <TextField className="mx-5" type="number" id="age" label="Age"
                                           variant="outlined"/>
                            </div>
                            <div className="p-3">
                                <TextField className="mx-5" type="number" id="telephoneNumber" label="telephone number"
                                           variant="outlined"/>
                                <TextField className="mx-5" type="email" id="email" label="E-mail"
                                           variant="outlined"/>
                                <Button className={classes.fileButton}
                                    variant="contained"
                                    component="label"
                                >
                                    Avatar Image
                                    <input
                                        id="image"
                                        type="file"
                                        style={{display: "none"}}
                                    />
                                </Button>
                            </div>
                            <div className="d-flex justify-content-center flex-column-reverse mt-5 mx-6">
                                <Button className={classes.button1} variant="contained" color="primary" onClick={this.editProfile}>Edit</Button>
                            </div>
                            <h4 className="d-flex justify-content-center" style={{marginBottom:"-30px"}}>Edit Password</h4>
                            <div className="d-flex justify-content-around">
                                <TextField className="m-5 email_size" type="password" id="password" label="Last Password"
                                    variant="outlined" required />
                                <TextField className="m-5 email_size" type="password" id="newPassword" label="New Password"
                                    variant="outlined" required />
                                <TextField className="m-5 email_size" type="password" id="repeatNewPassword" label="Repeat New Password"
                                    variant="outlined" required />
                            </div>
                            <div className="d-flex justify-content-center flex-column-reverse mt-5 mx-6">
                                <Button className={classes.button2} variant="contained" color="primary" onClick={this.editPassword}>Edit</Button>
                            </div>
                        </form>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }


}

export default withStyles(styles)(EditProfile);