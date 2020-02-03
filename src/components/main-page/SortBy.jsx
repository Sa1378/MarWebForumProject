import React, {Component} from "react";
import PeopleIcon from '@material-ui/icons/People';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {withStyles} from '@material-ui/core/styles'


const styles = {
    container: {
        marginBottom: "10px",
        marginLeft: "0px",
        backgroundColor: "transparent",
    },
    item: {
        backgroundColor: "white",
        marginRight: "1px",
        "&:focus": {
            outline: "none",
        }
    },
    icon: {
        marginRight: "2px",
    }
};


class SortBy extends Component {


    constructor(props) {
        super(props);
        this.state = {shownPosts: "followed"};
    }

    render() {
        const {classes} = this.props;
        const handleChange = (event, newShownPosts) => {
            console.log(newShownPosts);
            if (newShownPosts)
                this.setState({shownPosts: newShownPosts});
            this.props.onChange(newShownPosts);
        };

        return (
            <ToggleButtonGroup size="small" value={this.state.shownPosts} exclusive onChange={handleChange}
                               className={classes.container}>
                <ToggleButton key={1} value="followed" className={classes.item}>
                    <PeopleIcon className={classes.icon}/>Followed
                </ToggleButton>,
                <ToggleButton key={2} value="newest" className={classes.item}>
                    <NewReleasesIcon className={classes.icon}/>Newest
                </ToggleButton>,
                <ToggleButton key={3} value="hottest" className={classes.item}>
                    <WhatshotIcon className={classes.icon}/>Hottest
                </ToggleButton>,
                <ToggleButton key={4} value="participated" className={classes.item}>
                    <ChatBubbleIcon className={classes.icon}/>Participated
                </ToggleButton>
            </ToggleButtonGroup>
        );
    }
}

export default withStyles(styles)(SortBy);