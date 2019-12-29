import React, {Component} from "react";


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";


class Comment extends Component {

    state = {
        message: 'alireza te bez beza',
    };

    componentDidMount() {


    }


    render() {
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
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            {this.props.comment.id}
                        </Typography>
                        <Typography paragraph>
                            {this.props.comment.message}
                        </Typography>
                    </CardContent>
                    <Divider variant="middle"/>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Container>
        );
    }
}

export default Comment;
