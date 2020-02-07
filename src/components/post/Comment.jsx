import React, {Component} from "react";


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import TransitionsModal from "../TransitionsModal";
import {Link} from "react-router-dom";
import LikeDisLikeHandler from "./LikeDisLikeHandler";
import EditDeleteComment from "./EditDeleteComment";
import Badge from "@material-ui/core/Badge/Badge";
import ScoreIcon from '@material-ui/icons/Score';
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/core/SvgIcon/SvgIcon";


const styles = theme => (
    {
        link: {
            color: "gray",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "none",
                color: "black",
            },
            "&:focus": {
                outline: "none",
            }
        }
    }
);

class Comment extends Component {

    constructor(props) {
        super(props);
        this.isMyComment = this.isMyComment.bind(this);
    }

    state = {
        message: 'alireza te bez beza',
    };

    componentDidMount() {


    }


    render() {
        const {classes} = this.props;
        return (
            <Container maxWidth={"md"} className="mt-3">
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" src={this.randomAvatarImage()}
                                    alt={this.props.comment.name}>
                                R
                            </Avatar>
                        }
                        action={
                            this.isMyComment(this.props.comment.loggedInUser, this.props.comment.name)
                        }
                        title={<Link className={classes.link + " nav-link font-weight-bold font-italic"}
                                     style={{color: 'black'}}
                                     to={"/profile/" + this.props.comment.name}>{this.props.comment.name}</Link>}
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography paragraph>
                            {this.props.comment.body}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle"/>
                    <CardActions disableSpacing>
                        <LikeDisLikeHandler classes={classes}
                                            onLike={this.props.onLike}
                                            onDisLike={this.props.onDisLike}
                                            postCard={this.props.comment}/>
                        <TransitionsModal content="post" buttonName="reply" postPage={this.props.postPage}
                                          comment={this.props.comment}/>
                        <Badge badgeContent={120} color={'primary'}>
                            <ScoreIcon/>
                        </Badge>
                        <IconButton id="share" onClick={() => this.copyToClipboard(window.location.href)}
                                    className={classes.link} aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Container>
        );
    }

    isMyComment(loggedInUser, name) {
        const {classes} = this.props;
        if (loggedInUser === name) {
            return (
                <EditDeleteComment comment={this.props.comment} postPage={this.props.postPage}/>
            )
        } else {
            return null;
        }
    }

    randomAvatarImage() {
        return this.props.comment.profile_image
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

export default withStyles(styles)(Comment);