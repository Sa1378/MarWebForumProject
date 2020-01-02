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
import LikeIcon from "./LikeIcon";
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
                        title={<Link className={classes.link + " nav-link" + " font-weight-bold font-italic"}
                                     style={{color: 'black'}}
                                     to={"/profile/" + this.props.comment.name}>{this.props.comment.name}</Link>}
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography paragraph>
                            {this.props.comment.message}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle"/>
                    <CardActions disableSpacing>
                        <IconButton onClick={() => this.props.onLike(this.props.comment.id)} className={classes.link}
                                    aria-label="Like">
                            <LikeIcon liked={this.props.comment.liked}/>
                        </IconButton>
                        <TransitionsModal content="post" buttonName="reply"/>

                    </CardActions>
                </Card>
            </Container>
        );
    }

    isMyComment(loggedInUser, name) {
        const {classes} = this.props;
        if (loggedInUser === name) {
            return (
                <IconButton className={classes.link} aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>)
        } else {
            return null;
        }
    }

    randomAvatarImage() {
        let number = (Math.floor(Math.random() * 9)) + 3;
        console.log("==> " + number);
        if (number === 3) {
            return img3
        } else if (number === 4) {
            return img4
        } else if (number === 5) {
            return img5
        } else if (number === 6) {
            return img6
        } else if (number === 7) {
            return img7
        } else if (number === 8) {
            return img8
        } else if (number === 9) {
            return img9
        } else if (number === 10) {
            return img10
        } else if (number === 11) {
            return img11
        } else return img
    }
}

export default withStyles(styles)(Comment);