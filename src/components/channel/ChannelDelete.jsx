import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera, RepeatOneSharp} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';


class ChannelDelete extends Component {

    constructor(props){
        super(props);
        var currentComponent=this;
        fetch('http://localhost:8000/channel/channel/'+this.props.info.id, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
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
            window.location.href = "/profile/"+currentComponent.props.info.creator_username;
        })
        .catch(function (err) {
            //console.log(err);
        })
    }
    render(){
        return (<div></div>);
    }


}

export default ChannelDelete;