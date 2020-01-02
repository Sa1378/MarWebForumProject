import React, {Component} from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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