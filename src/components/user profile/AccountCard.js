import React, {Component} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import img from '../../static/images/avatar/download.jpeg'

class AccountCard extends Component {

    inlineStyle = {
        display: 'inline',
    };

    render() {
        return (
            <div className='d-flex justify-content-around'>
                <ListItem style={{width: '40vh'}}>
                    <ListItemAvatar>
                        <Avatar alt="User" src={img}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.props.user.username}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    style={this.inlineStyle}
                                    color="textPrimary"
                                >
                                    {/*{this.props.}*/}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </div>
        );
    }

}

export default AccountCard;