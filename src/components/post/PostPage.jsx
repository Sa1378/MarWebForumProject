import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Container from "@material-ui/core/Container";
import Comment from "./Comment";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import NewComment from "./NewComment";
import Sidebar from "../main-page/Sidebar";
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

    componentDidMount() {
        console.log("222222222222222222222222222222222222222222222222222222222222222222222222222222222222222");
        this.getPost()
    }

    getPost() {
        let myThis = this;
        fetch("http://localhost:8000/post/post-view/" + this.props.match.params.name, {
            method: "GET",
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
            console.log(data);
            myThis.setState({post: data.post});
            myThis.setState({comments: data.post.comments})
        }).catch(function (error) {
            console.log(error)
        })
    }

    sendPostRequest(url) {
        fetch(url, {
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
            console.log(data);
        }).catch(function (error) {
            console.log(error)
        })
    }

    likePost() {
        let url = "http://localhost:8000/post/like/" + this.props.match.params.name;
        this.sendPostRequest(url)
    }

    disLikePost() {
        let url = "http://localhost:8000/post/dislike/" + this.props.match.params.name;
        this.sendPostRequest(url)
    }

    likeComment(target_id) {
        let url = "http://localhost:8000/post/like/" + target_id;
        this.sendPostRequest(url)
    }

    disLikeComment(target_id) {
        let url = "http://localhost:8000/post/like/" + target_id;
        this.sendPostRequest(url)
    }


    state = {
        post: {id: 1, content: 'Hello this is a bullshit text :))', title: 'bullshit'},
        comments: [],
    };


    postListStyle = {
        width: '100vh',
        justifyContent: 'center',
    };

    handleLikeComment(commentId) {
        this.likeComment(commentId);
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
        this.disLikeComment(commentId);
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
        this.likePost();
        const post = this.state.post;
        post.liked = !post.liked;
        if (post.disliked) {
            post.disliked = !post.disliked;
        }
        this.setState({post: post});
    }

    handleDisLikePost(postId) {
        this.disLikePost();
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
                                title={this.state.post.title}
                                subheader={this.state.post.create_date}
                            />
                            <CardMedia
                                image="../../static/images/cards/wallpaper4.jpg"
                                title="Paella dish"
                            />
                            {this.randomImage()}

                            <CardContent>
                                <Typography paragraph>
                                    {this.state.post.body}
                                </Typography>
                            </CardContent>
                            <Divider variant="middle"/>
                            <CardActions disableSpacing>
                                <LikeDisLikeHandler classes={classes}
                                                    onLike={this.handleLikePost}
                                                    onDisLike={this.handleDisLikePost}
                                                    postCard={this.state.post}/>
                                <IconButton onClick={() => this.copyToClipboard(window.location.href)}
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
                            post={this.state.post}
                            postPage={this.props.match.params.name}
                            onLike={this.handleLikeComment}
                            onDisLike={this.handleDisLikeComment}
                        />)}

                        <NewComment postPage={this.props.match.params.name}/>
                    </Container>
                    <Sidebar/>
                </div>

            </Container>
        );
    }

    randomImage() {
        return <img src={this.state.post.media} width={'100%'} alt={"HI"}/>
    }

    randomAvatarImage() {
        return this.state.post.profile_image
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

export default withStyles(styles)(PostPage);