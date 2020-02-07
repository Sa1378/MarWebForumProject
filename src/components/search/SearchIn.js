import React, {Component} from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {withStyles} from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';


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
        this.state = {searchIn: "posts"};
    }

    render() {
        const {classes} = this.props;
        const handleChange = (event, newSearchIn) => {
            if (newSearchIn)
            {
                this.setState({searchIn: newSearchIn});
            }
            this.props.onChange(newSearchIn);
        };

        return (
            <ToggleButtonGroup size="small" value={this.state.searchIn} exclusive onChange={handleChange}
                               className={classes.container}>
                <ToggleButton key={1} value="posts" className={classes.item}>
                    <EmailIcon className={classes.icon}/>Posts
                </ToggleButton>,
                <ToggleButton key={2} value="users" className={classes.item}>
                    <PersonIcon className={classes.icon}/>Users
                </ToggleButton>,
                <ToggleButton key={3} value="channels" className={classes.item}>
                    <SupervisedUserCircleIcon className={classes.icon}/>Channels
                </ToggleButton>,
            </ToggleButtonGroup>
        );
    }
}

export default withStyles(styles)(SortBy);