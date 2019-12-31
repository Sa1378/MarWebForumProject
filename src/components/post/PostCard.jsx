import React, {Component} from 'react';
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
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import {red} from "@material-ui/core/colors";
import LikeIcon from "./LikeIcon";

const styles = {
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        margin: "0px 50px 50px 50px",
    },
    grow: {
        flexGrow: 2,
    },
    media: {
        display: "none",
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    liked: {
        color: "red",
    },
    notliked: {
        color: "black",
    },
    preWrap: {
        whiteSpace: "pre-wrap",
    }
};


class PostCard extends Component {


    render() {
        return (
            <Card className="mt-3 w-100">
                <Link to={'/post/' + this.props.postCard.id} style={this.style} className="nav-link">
                    <CardActionArea>
                        <CardMedia
                            // component={}
                            // alt={}
                            // height={}
                            // image={}
                            // title={}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.postSummary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <Divider variant="middle"/>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                    <IconButton onClick={() => this.props.onLike(this.props.postCard.id)} aria-label="add to favorites">
                        <LikeIcon
                            liked={this.props.postCard.liked}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }

}

export default PostCard;