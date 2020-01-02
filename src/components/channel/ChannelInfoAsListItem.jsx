import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";


class ChannelInfoAsListItem extends Component {

    inlineStyle = {
        display: 'inline',
    };
    linkStyle = {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color: "white",
            textDecoration: "none",
        }
    };

    render() {
        return (
            <ListItem style={{width: '40vh'}} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={this.props.channel.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                style={this.inlineStyle}
                                color="textPrimary"
                            >
                                <Link style={this.linkStyle} to={'/profile/' + this.props.channel.creator}>
                                    {this.props.channel.creator}
                                </Link>
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        );
    }


}

export default ChannelInfoAsListItem;