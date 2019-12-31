import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";


class ChannelInfoAsListItem extends Component {

    inlineStyle = {
        display: 'inline',
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
                                {this.props.channel.creator}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        );
    }


}

export default ChannelInfoAsListItem;