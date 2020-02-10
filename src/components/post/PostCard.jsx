import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withStyles} from "@material-ui/core";
import LikeDisLikeHandler from "./LikeDisLikeHandler";
import Badge from "@material-ui/core/Badge";
import ScoreIcon from '@material-ui/icons/Score';
import ImageAvatar from '../user profile/Avatar';


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
        },
        card: {
            backgroundColor: "rgb(240,240,240)",
            marginBottom: "20px",
            padding: "10px",
        }
    }
);


class PostCard extends Component {

    state = {
        avatar: {},
        post: this.props.postCard
    }

    constructor(props) {
        super(props)
        this.likePost = this.likePost.bind(this)
        this.disLikePost = this.disLikePost.bind(this)
        this.handleLikePost = this.handleLikePost.bind(this)
        this.handleDisLikePost = this.handleDisLikePost.bind(this)
    }


    sendPostRequest(url, type) {
        fetch(url, {
            method: type,
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
            //console.log(data);
        }).catch(function (error) {
            //console.log(error)
        })
    }

    likePost(isDelete) {
        let type = "POST";
        if (isDelete) {
            type = "DELETE"
        }
<<<<<<< HEAD
        //console.log(this.props.postCard.id)
=======
        console.log(this.props.postCard.id);
>>>>>>> 191f89e06521604822743f9e92969192875029e3
        let url = "http://localhost:8000/post/like/" + this.props.postCard.id;
        this.sendPostRequest(url, type)
    }

    disLikePost(isDelete) {
        let type = "POST";
        if (isDelete) {
            type = "DELETE"
        }
        let url = "http://localhost:8000/post/dislike/" + this.props.postCard.id;
        this.sendPostRequest(url, type)
    }

    handleLikePost(postId) {
        const post = this.props.postCard;
        this.likePost(post.liked);
        post.liked = !post.liked;
        if (post.disliked) {
            post.disliked = !post.disliked;
        }
        this.setState({post: post});
    }

    handleDisLikePost(postId) {
        const post = this.props.postCard;
        this.disLikePost(post.disliked);
        post.disliked = !post.disliked;
        if (post.liked) {
            post.liked = !post.liked;
        }
        this.setState({post: post});
    }

    render() {
        const {classes} = this.props;
        //console.log("EEEEEEEEEEEEEEEEEEEZZZZZZZZZZZZZZZZZZZZ")
        //console.log(this.state.post)
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={<ImageAvatar avatarSrc={this.state.avatar} isList="true"/>}
                    action={
                        <IconButton className={classes.link} aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={<Link className={classes.link + " nav-link font-weight-bold font-italic"}
                                 style={{color: 'black'}}
                                 to={"/post/" + this.props.postCard.id}>{this.props.postCard.title}</Link>}
                    titleTypographyProps={{fontSize: "20px"}}
                    subheader={<Link className={classes.link + " nav-link"}
                                     to={"/profile/" + this.props.postCard.author}>{this.props.postCard.author}</Link>}
                />
                {this.showMedia()}
                <Link to={'/post/' + this.props.postCard.id} style={this.style} className="nav-link">
                    <CardActionArea>
                        <CardMedia

                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.postSummary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <Divider variant="middle"/>
                <CardActions>
                    <LikeDisLikeHandler classes={classes}
                                        onLike={this.handleLikePost}
                                        onDisLike={this.handleDisLikePost}
                                        postCard={this.state.post}/>
                    <IconButton id="share" onClick={() => this.copyToClipboard(window.location.href)}
                                className={classes.link} aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <Badge badgeContent={120} color={'primary'}>
                        <ScoreIcon/>
                    </Badge>
                </CardActions>
            </Card>
        );
    }

    showMedia() {
<<<<<<< HEAD
        //console.log("MMMMMEEDDDIIIAAAAAAAAAAAAAAAAAAAAAa");
        //console.log(this.props.postMedia);
=======
        console.log(this.props.postMedia);
>>>>>>> 191f89e06521604822743f9e92969192875029e3
        return (
            <img src={this.props.postMedia} width={'100%'} style={{maxWidth: "600px", minWidth: "600px"}}
                 alt="Can't be shown."/>
        )
    }

    componentWillMount() {
        var currentComponent = this;
        fetch('http://localhost:8000/account/profile/' + this.props.postCard.author, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        })
            .then(function (response) {
                //console.log(response)
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
<<<<<<< HEAD

                //console.log("DAAAATTAAAAAAAAAAAAAAAAAAAAAAAAAAa");
                //console.log(data.image);
=======
>>>>>>> 191f89e06521604822743f9e92969192875029e3
                currentComponent.setState({avatar: data.image});
            })
            .catch(function (err) {
                //console.log(err);
                //    window.location.href="/notfound";
            })
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

export default withStyles(styles)(PostCard);