import React, {Component} from "react";


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import TransitionsModal from "../TransitionsModal";
import {Link} from "react-router-dom";
import img3 from '../../static/images/avatar/download.jpeg'
import img4 from '../../static/images/avatar/photo_2020-01-02_22-01-43.jpg'
import img5 from '../../static/images/avatar/photo_2020-01-02_22-01-52.jpg'
import img6 from '../../static/images/avatar/photo_2020-01-02_22-01-58.jpg'
import img7 from '../../static/images/avatar/photo_2020-01-02_22-02-02.jpg'
import img8 from '../../static/images/avatar/photo_2020-01-02_22-02-06.jpg'
import img9 from '../../static/images/avatar/photo_2020-01-02_22-02-11.jpg'
import img10 from '../../static/images/avatar/photo_2020-01-02_22-02-15.jpg'
import img11 from '../../static/images/avatar/photo_2020-01-02_22-02-19.jpg'
import img from "../../static/images/cards/wallpaper4.jpg";
import LikeDisLikeHandler from "./LikeDisLikeHandler";
import EditDeleteComment from "./EditDeleteComment";
import Badge from "@material-ui/core/Badge/Badge";
import ScoreIcon from '@material-ui/icons/Score';


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
                        <TransitionsModal content="post" buttonName="reply"/>
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
                <EditDeleteComment comment={this.state.message}/>
            )
        } else {
            return null;
        }
    }

    randomAvatarImage() {
        return this.props.comment.profile_image
    }
}

export default withStyles(styles)(Comment);