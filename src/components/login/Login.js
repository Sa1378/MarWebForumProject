import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SimpleTabs from "../TwoTab";

class Login extends Component {

    componentWillMount(){
        var accessToken=localStorage.getItem("access-token");
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        if(accessToken){
            window.location.reload();
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: 'white', height: '58vh',}}
                                className="border rounded mt-5">
                        <SimpleTabs name1="Sign in" name2="Sing up" page="login"/>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }

}

export default Login;