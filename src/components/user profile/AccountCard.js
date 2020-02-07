import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {withStyles} from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography";
import img from '../../static/images/avatar/download.jpeg'
import img3 from '../../static/images/avatar/download.jpeg'
import img4 from '../../static/images/avatar/photo_2020-01-02_22-01-43.jpg'
import img5 from '../../static/images/avatar/photo_2020-01-02_22-01-52.jpg'
import img6 from '../../static/images/avatar/photo_2020-01-02_22-01-58.jpg'
import img7 from '../../static/images/avatar/photo_2020-01-02_22-02-02.jpg'
import img8 from '../../static/images/avatar/photo_2020-01-02_22-02-06.jpg'
import img9 from '../../static/images/avatar/photo_2020-01-02_22-02-11.jpg'
import img10 from '../../static/images/avatar/photo_2020-01-02_22-02-15.jpg'
import img11 from '../../static/images/avatar/photo_2020-01-02_22-02-19.jpg'

const styles = {
    item: {
        cursor:"pointer",
    }
}


class AccountCard extends Component {
    constructor(props){
        super(props);
        this.openProfile=this.openProfile.bind(this);
    }

    inlineStyle = {
        display: 'inline',
    };

    state={
        avatar:""
    }

    componentWillMount(){
        var currentComponent = this;
        fetch('http://localhost:8000/account/profile/' + this.props.user.username, {
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
                console.log("DAAAATTAAAAAAAAAAAAAAAAAAAAAAAAAAa")
                console.log(data)
                currentComponent.setState({avatar: data.image})
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    openProfile(){
        window.location.href="/profile/"+this.props.user.username;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className='d-flex justify-content-around'>
                <ListItem style={{width: '150%'}} className={classes.item}>
                    <ListItemAvatar>
                        <Avatar alt="User" src={this.state.avatar}/>
                    </ListItemAvatar>
                    <ListItemText onClick={this.openProfile}
                        primary={this.props.user.username}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={this.inlineStyle}
                                    color="textPrimary"
                                >
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </div>
        );
    }

}

export default withStyles(styles)(AccountCard);