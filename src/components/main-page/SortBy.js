import React,{Component} from "react";
import PeopleIcon from '@material-ui/icons/People';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {withStyles} from '@material-ui/core/styles'


const styles={
    container: {
        marginBottom:"20px",
        marginRight:"30px",
        display:"flex",
        backgroundColor:"transparent",
        justifyContent:"flex-end",
    },
    item: {
        backgroundColor:"white",
    },
    icon: {
        marginLeft:"3px",
    }
};
  

class SortBy extends Component{

    

    constructor(props) {
        super(props);
        this.state = {shownPosts:"followed"};
    }

    render() {
        const {classes}=this.props;
        const handleChange = (event, newShownPosts) => {
            console.log(newShownPosts);
            if(newShownPosts)
                this.setState({shownPosts:newShownPosts});
        };

        return (
                <ToggleButtonGroup size="small" value={this.state.shownPosts} exclusive onChange={handleChange} className={classes.container}>
                    <ToggleButton key={1} value="participated" className={classes.item}>
                    شرکت ‌کرده‌ها   <ChatBubbleIcon className={classes.icon}/>
                    </ToggleButton>,
                    <ToggleButton key={2} value="hottest" className={classes.item}>
                    داغ ‌ترین‌ها    <WhatshotIcon className={classes.icon}/>
                    </ToggleButton>,
                    <ToggleButton key={3} value="newest" className={classes.item}>
                    تازه‌ ترین‌ها   <NewReleasesIcon className={classes.icon}/>
                    </ToggleButton>,
                    <ToggleButton key={4} value="followed" className={classes.item}>
                    دنبال‌ شده‌ها   <PeopleIcon className={classes.icon}/>
                    </ToggleButton>
                </ToggleButtonGroup>
        );
    }
}

export default withStyles(styles)(SortBy);