import React, {Component} from "react"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ChannelInfoSettingButton from "./ChannelInfoSettingButton";
import {withStyles} from "@material-ui/core";

const styles = theme => (
    {
        link: {
            "&:focus": {
                outline: "none",
            }
        }
    }
);


class ChannelInfo extends Component {


    render() {
        const {classes} = this.props;
        return (
            <Card className="position-sticky w-100" style={{top: 90}}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <ChannelInfoSettingButton linkClass={classes.link}/>
                    }
                    title="Channel Info"
                    subheader="Alireza Channel"
                />
                <CardMedia
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton className={classes.link} aria-label={this.followOrUnFollowLabel(false)}>
                        {this.followOrUnFollowIcon(false)}
                    </IconButton>
                    <IconButton className={classes.link} aria-label="share">
                        <ShareIcon color={"primary"}/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }

    followOrUnFollowLabel(followed) {
        if (followed) {
            return "Follow";
        }
        return "UnFollow";
    }

    followOrUnFollowIcon(followed) {
        if (followed) {
            return <RemoveCircleIcon color={"primary"}/>
        }
        return <AddCircleIcon color={"primary"}/>
    }


}


export default withStyles(styles)(ChannelInfo);