import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Data from "../user-profile/profileData";
import Follow from "../user-profile/follow";
import SimpleTabs from "../TwoTab";

function Login(){
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Typography component="div" style={{backgroundColor: 'white', height: '68vh',}}
                            className="border rounded mt-5">
                    <SimpleTabs name1="Sign in" name2="Sing up" page="login"/>
                </Typography>
            </Container>
        </React.Fragment>
    );

}

export default Login;