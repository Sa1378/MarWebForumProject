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
import ImageAvatars from "../user profile/Avatar";

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

    state = {
        followed: false,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps == this.props) return;
        this.checkFollowedState();

    }

    checkFollowedState() {
        this.setState({followed: false});
        for (let i = 0; i < this.props.info.followers_channel.length; i++) {
            //console.log("||||||||||||||||||||||||||||||||||||")
            //console.log(this.props.info.followers_channel[i].source_name)
            if (this.props.info.followers_channel[i].source_name == localStorage.getItem("username")) {
                this.setState({followed: true});
                break;
            }
        }
        //console.log("dskskdjksdksadksadksdak " + this.state.followed)
    }


    render() {
        const {classes} = this.props;
        return (
            <Card className="position-sticky w-100" style={{top: 90}}>
                <CardHeader
                    avatar={
                        <ImageAvatars avatarSrc={this.props.info.image} isList='true'/>
                    }
                    action={
                        <ChannelInfoSettingButton
                            canEdit={localStorage.getItem("username") === this.props.info.creator_username}
                            followers={this.props.followers}
                            authors={this.props.authors}
                            editAuthors={this.props.info.authors}
                            info={this.props.info}
                            linkClass={classes.link}/>
                    }
                    title={<h5>{this.props.info.title}</h5>}
                    subheader={"subject: " + this.props.info.subject + "\nfollowers: " + this.props.followers.length}
                />
                <CardMedia
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.info.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton className={classes.link} aria-label={this.followOrUnFollowLabel(false)}>
                        {this.followOrUnFollowIcon()}
                    </IconButton>
                    <IconButton onClick={() => this.copyToClipboard(window.location.href)} className={classes.link} aria-label="share">
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

    followOrUnFollowIcon() {
        var followed = this.state.followed;
        //console.log("FOLOOWWEDDD: " + followed)
        if (followed) {
            return <RemoveCircleIcon onClick={this.props.unfollow} color={"secondary"}/>
        }
        return <AddCircleIcon onClick={this.props.follow} color={"primary"}/>
    }

    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
        alert("Share link copied to clipboard")
    };

}


export default withStyles(styles)(ChannelInfo);