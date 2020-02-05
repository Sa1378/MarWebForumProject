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
import Container from "@material-ui/core/Container";
import Comment from "./Comment";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import NewComment from "./NewComment";
import img from '../../static/images/cards/wallpaper4.jpg'
import img2 from '../../static/images/cards/photyoe-LEqYrDZWLH4-unsplash.jpg'
import Sidebar from "../main-page/Sidebar";
import img3 from '../../static/images/avatar/download.jpeg'
import img4 from '../../static/images/avatar/photo_2020-01-02_22-01-43.jpg'
import img5 from '../../static/images/avatar/photo_2020-01-02_22-01-52.jpg'
import img6 from '../../static/images/avatar/photo_2020-01-02_22-01-58.jpg'
import img7 from '../../static/images/avatar/photo_2020-01-02_22-02-02.jpg'
import img8 from '../../static/images/avatar/photo_2020-01-02_22-02-06.jpg'
import img9 from '../../static/images/avatar/photo_2020-01-02_22-02-11.jpg'
import img10 from '../../static/images/avatar/photo_2020-01-02_22-02-15.jpg'
import img11 from '../../static/images/avatar/photo_2020-01-02_22-02-19.jpg'
import EditDeletePost from "./EditDeletePost";
import LikeDisLikeHandler from "./LikeDisLikeHandler";
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

class PostPage extends Component {

    constructor(props) {
        super(props);
        this.handleLikeComment = this.handleLikeComment.bind(this);
        this.handleDisLikeComment = this.handleDisLikeComment.bind(this);
        this.handleLikePost = this.handleLikePost.bind(this);
        this.handleDisLikePost = this.handleDisLikePost.bind(this);
    }
    componentDidMount(): void {
        fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Server Error!");
        }).then(function (data) {

        }).catch(function (error) {
            console.log(error)
        })
    }

    state = {
        post: null,
        comments: [],
    };


    postListStyle = {
        width: '100vh',
        justifyContent: 'center',
    };

    handleLikeComment(commentId) {
        const postCards = [];
        this.state.comments.forEach(function (comment) {
            if (commentId === comment.id) {
                comment.liked = !comment.liked;
                if (comment.disliked) {
                    comment.disliked = !comment.disliked;
                }
            }
            postCards.push(comment);
        });
        this.setState({postCards: postCards});
    }

    handleDisLikeComment(commentId) {
        const postCards = [];
        this.state.comments.forEach(function (comment) {
            if (commentId === comment.id) {
                comment.disliked = !comment.disliked;
                if (comment.liked) {
                    comment.liked = !comment.liked;
                }
            }
            postCards.push(comment);
        });
        this.setState({postCards: postCards});
    }

    handleLikePost(postId) {
        const post = this.state.post;
        post.liked = !post.liked;
        if (post.disliked) {
            post.disliked = !post.disliked;
        }
        this.setState({post: post});
    }

    handleDisLikePost(postId) {
        const post = this.state.post;
        post.disliked = !post.disliked;
        if (post.liked) {
            post.liked = !post.liked;
        }
        this.setState({post: post});
    }

    render() {
        const {classes} = this.props;
        return (
            <Container>
                <div className="d-flex justify-content-center">
                    <Container maxWidth={"lg"}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar src={this.randomAvatarImage()} aria-label="recipe">
                                    </Avatar>
                                }
                                action={

                                    <EditDeletePost post={this.state.post}/>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                image="../../static/images/cards/wallpaper4.jpg"
                                title="Paella dish"
                            />
                            {this.randomImage()}
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                    chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                                    cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                    heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                                    cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                            <Divider variant="middle"/>
                            <CardActions disableSpacing>
                                <LikeDisLikeHandler classes={classes}
                                                    onLike={this.handleLikePost}
                                                    onDisLike={this.handleDisLikePost}
                                                    postCard={this.state.post}/>
                                <IconButton
                                    className={classes.link} aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                                <Badge badgeContent={120} color={'primary'}>
                                    <ScoreIcon/>
                                </Badge>
                            </CardActions>
                        </Card>

                        {this.state.comments.map(comment => <Comment
                            key={comment.id}
                            comment={comment}
                            onLike={this.handleLikeComment}
                            onDisLike={this.handleDisLikeComment}
                        />)}

                        <NewComment/>
                    </Container>
                    <Sidebar/>
                </div>

            </Container>
        );
    }

    randomImage() {
        let a = (Math.floor(Math.random() * 2)) / 2 + 1;
        if (a === 1) {
            return <img src={img} width={'100%'} alt="Can't be shown."/>
        } else return <img src={img2} width={'100%'} alt="Can't be shown."/>
    }

    randomAvatarImage() {
        let number = (Math.floor(Math.random() * 9)) + 3;
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

export default withStyles(styles)(PostPage);