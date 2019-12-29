import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChannelInfoAsListItem from "./ChannelInfoAsListItem";


class ChannelsList extends Component {


    listStyle = {
        width: '100%',
        maxWidth: 360,
    };
    inlineStyle = {
        display: 'inline'
    };


    render() {
        return (
            <List style={this.listStyle}>
                <Divider variant="inset" component="li"/>

                {
                    this.props.channels.map(item => (
                        <React.Fragment>
                            <ChannelInfoAsListItem channel={item}/>
                            <Divider variant="inset" component="li"/>
                        </React.Fragment>
                    ))
                }


            </List>

        );
    }


}

export default ChannelsList;