import React, {Component} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert/Alert";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Tooltip} from "@material-ui/core";

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.changePassword = this.changePassword.bind(this);
    }

    parseURLParams(url) {
        let queryStart = url.indexOf("?") + 1,
            queryEnd = url.indexOf("#") + 1 || url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parameters = {}, i, n, v, nv;

        if (query === url || query === "") return;

        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=", 2);
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);

            if (!parameters.hasOwnProperty(n)) parameters[n] = [];
            parameters[n].push(nv.length === 2 ? v : null);
        }
        return parameters;
    }


    changePassword() {
        var currentComponent = this;
        let parameters = this.parseURLParams(window.location.href);
        let data = {
            'new_password1': document.getElementById("new-password").value,
            'new_password2': document.getElementById("repeat-new-password").value,
            'uid': parameters.uid[0],
            'token': parameters.token[0]
        };

        fetch("http://localhost:8000/account/password/reset/confirm", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Access-Control-Origin": "*"},
            body: JSON.stringify(data)
        })
            .then(function (response) {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
                currentComponent.setState({loginFail: true})
                throw new Error("Server Error!");
            })
            .then(function (data) {
                    window.location.href = "/login";
                }
            )
            .catch(function (err) {
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <form className="d-flex flex-column justify-content-around my-5">
                    <TextField className="m-5 email_size" type="text" id="new-password" label="Password"
                               variant="outlined" required/>
                    <TextField className="m-5 email_size" type="password" id="repeat-new-password"
                               label="Repeat Password"
                               variant="outlined" required/>
                    <Button className="my-5" variant="contained" color="primary" onClick={this.changePassword}>Change
                        password</Button>
                </form>
            </div>
        );
    }
}

export default NotFound;