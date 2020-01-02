import React, {Component} from "react";


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import ReplyIcon from '@material-ui/icons/Reply';

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
                            <Avatar aria-label="recipe" src={this.props.comment.avatar_src}
                                    alt={this.props.comment.name}>
                                R
                            </Avatar>
                        }
                        action={
                            this.isMyComment(this.props.comment.loggedInUser, this.props.comment.name)
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography paragraph>
                            {this.props.comment.id}
                        </Typography>
                        <Typography paragraph>
                            {this.props.comment.message}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle"/>
                    <CardActions disableSpacing>
                        <IconButton className={classes.link} aria-label="Like">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton className={classes.link} aria-label="Like">
                            <ReplyIcon/>
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
                <IconButton className={classes.link} aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>)
        } else {
            return null;
        }
    }
}

export default withStyles(styles)(Comment);