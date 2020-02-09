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
import CardMedia from "@material-ui/core/CardMedia";


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
                            this.isMyComment(this.props.comment.user.id, localStorage.getItem('userId'))
                        }
                        title={<Link className={classes.link + " nav-link font-weight-bold font-italic"}
                                     style={{color: 'black'}}
                                     to={"/profile/" + this.props.comment.name}>{this.props.comment.name}</Link>}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        image="../../static/images/cards/wallpaper4.jpg"
                        title="Paella dish"
                    />
                    {this.image()}

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

    image() {
        return <img src={this.props.comment.media} width={'100%'} alt={"HI"}/>

    }
}

export default withStyles(styles)(Comment);