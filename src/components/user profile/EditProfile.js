import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornments from "../Password";

class EditProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Typography component="div" style={{backgroundColor: 'white', height: '50vh'}}>
                        <form autoComplete="on">
                            <div className="p-3">
                                <h4 className="d-flex justify-content-center">Edit Profile</h4>
                                <TextField className="mx-5" id="outlined-basic" label="Name" variant="outlined"/>
                                <TextField className="mx-5" id="outlined-basic" label="User Name" variant="outlined"/>
                                <TextField className="mx-5" type="number" id="outlined-basic" label="Age"
                                           variant="outlined"/>
                            </div>
                            <div className="p-3">
                                <TextField className="mx-5" type="number" id="outlined-basic" label="telephone number"
                                           variant="outlined"/>
                                <TextField className="mx-5" type="email" id="outlined-basic" label="E-mail"
                                           variant="outlined"/>
                                <Button className='mx-1'
                                    variant="contained"
                                    component="label"
                                >
                                    Avatar Image
                                    <input
                                        type="file"
                                        style={{display: "none"}}
                                    />
                                </Button>
                                <Button className="mt-3 ml-5" variant="contained" color="primary">Edit</Button>
                            </div>
                            <h4 className="d-flex justify-content-center">Edit Password</h4>
                            <div className="d-flex justify-content-around">
                                <InputAdornments label="Last Password"/>
                                <InputAdornments label="Password"/>
                                <InputAdornments label="Repeat Password"/>
                            </div>
                            <div className="d-flex justify-content-center flex-column-reverse mt-5 mx-5">
                                <Button className="edit_password" variant="contained" color="primary">Edit
                                    Password</Button>
                            </div>
                        </form>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }


}

export default EditProfile;