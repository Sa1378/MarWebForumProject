import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageAvatars from "./Avatar";
import SimpleTabs from "../TwoTab";
import Data from "./profileData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow";
import TransitionsModal from "../TransitionsModal";
import {withStyles} from '@material-ui/core/styles';
import '../../static/css/material.css'
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from '@material-ui/icons/Share';
import CardActions from "@material-ui/core/CardActions";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const styles = theme => ({
    outline: {
        "&:focus": {
            outline: "none",
        }
    },
    tabs: {
        backgroundColor: "gray",
    }
});

class Profile extends Component {

    constructor(props) {
        super(props);
        this.handleLikePost = this.handleLikePost.bind(this);
        this.handleDisLikePost = this.handleDisLikePost.bind(this);
        this.changeFollowStatus = this.changeFollowStatus.bind(this);
        this.props.refreshToken();
    }

    state={
        shareCopy:false,
    }

    componentWillMount() {
        this.getUserData();
        this.getFollowers();
        this.getFollowings();
        this.getPostCards();
        this.getChannels();
    }

    getChannels() {
        var currentComponent = this;
        fetch('http://localhost:8000/channel/channels/' + this.props.match.params.username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        })
            .then(function (response) {
                //console.log("Channel response");
                //console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                //console.log("CHAAAANNEEEEEELLLLL")
                //console.log(data)
                var tmp = []
                for (let i = 0; i < data.channels.length; i++) {
                    var channel = data.channels[i]
                    //console.log(channel.title)
                    if (channel.title == currentComponent.props.match.params.username) continue;
                    tmp.push({id: channel.id, title: channel.title, creator: channel.creator_username})
                }
                //console.log(tmp);
                currentComponent.setState({channels: tmp})

            })
            .catch(function (err) {
                //console.log(err);
            })
    }

    getPostCards() {
        var currentComponent = this;
        fetch('http://localhost:8000/post/userposts/' + this.props.match.params.username, {
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
                let tmp = [];
                data.posts.reverse();
                let len=data.posts.length;
                //console.log("POOOOOOOOOOOOOOOSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTSSSSSSSSS")
                //console.log(data.posts)
                for (let i = 0; i < len; i++) {
                    let post = data.posts[i];
                    //console.log(post);
                    fetch("http://localhost:8000/post/post-view/" + post.id, {
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
                    //    window.location.href = "/notfound"
                    }).then(function (data2) {
                        //console.log(data2);
                        //console.log(post.id)
                        tmp.push(0)
                        post.liked=data2.post.liked;
                        post.disliked=data2.post.disliked;
                        //console.log(post.id);
                        if(tmp.length==len){
                            tmp=[]
                            for(let i=0;i<len;i++){
                                let post=data.posts[i];
                                //console.log(post)
                                tmp.push({
                                    id: post.id,
                                    author: post.post_owner,
                                    title: post.title,
                                    postSummary: post.summary,
                                    liked: post.liked,
                                    disliked: post.disliked,
                                    postMedia: post.media
                                });
                            }
                            //console.log("SAAAAAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGGGG")
                            //console.log(tmp);
                            currentComponent.setState({postCards: tmp});
                        }
                    }).catch(function (error) {
                        //console.log(error)
                    })
                    
                }
            })
            .catch(function (err) {
                //console.log(err);
            })
    }

    getFollowings() {
        var currentComponent = this;
        fetch('http://localhost:8000/account/followings/' + this.props.match.params.username, {
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
                //console.log("FOLOWINGSSSSSSSSSSS")
                //console.log(data.followings)
                //console.log()
                var tmp = []
                for (let i = 0; i < data.followings.length; i++) {
                    if (data.followings[i].resourcetype == "FollowChannel") continue;
                    tmp.push({
                        username: data.followings[i].target_name,
                        avatar_src: 'src/static/images/avatar/download.jpeg'
                    })
                }
                //console.log(tmp)
                currentComponent.setState({followings: tmp});
            })
            .catch(function (err) {
                //console.log(err);
            })
    }

    getFollowers() {
        var currentComponent = this;
        fetch('http://localhost:8000/account/followers/' + this.props.match.params.username, {
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
                //console.log("FOLOWERSSSSSSSSSSSSSSSSSSS")
                //console.log(data)
                var tmp = []
                for (let i = 0; i < data.followers.length; i++) {
                    if (data.followers[i].resourcetype == "FollowChannel") continue;
                    if (data.followers[i].source_name == localStorage.getItem("username")) {
                        currentComponent.setState({followed: true});
                        //console.log("kjdsjkdsjkdskjdskj")
                    }
                    tmp.push({
                        username: data.followers[i].source_name,
                        avatar_src: 'src/static/images/avatar/download.jpeg'
                    })
                }
                //console.log(tmp)
                currentComponent.setState({followers: tmp});
            })
            .catch(function (err) {
                //console.log(err);
            })
    }

    getUserData() {

        var currentComponent = this;
        fetch('http://localhost:8000/account/profile/' + this.props.match.params.username, {
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
                //console.log("DAAAATTAAAAAAAAAAAAAAAAAAAAAAAAAAa")
                //console.log(data)
                currentComponent.setState({profile: data})
            })
            .catch(function (err) {
                //console.log(err);
                window.location.href = "/notfound";
            })
    }


    state = {
        profile: {
            age: null,
            telephone_number: null,
            user: {id: 0, email: null, username: "loading...", password: null, first_name: null, last_name: null}
        },
        avatar_src: 'images/download.jpeg',
        followed: false,
        channels: [],
        postCards: [],
        followers: [],
        followings: []
    };

    postListStyle = {
        width: '100vh',
        marginLeft: "20%",
        justifyContent: 'center',
    };

    handleLikePost(postId) {
        const postCards = [];
        this.state.postCards.forEach(function (postCard) {
            if (postId === postCard.id) {
                postCard.liked = !postCard.liked;
                if (postCard.disliked) {
                    postCard.disliked = !postCard.disliked;
                }
            }
            postCards.push(postCard);
        });
        this.setState({postCards: postCards});
    }

    handleDisLikePost(postId) {
        const postCards = [];
        this.state.postCards.forEach(function (postCard) {
            if (postId === postCard.id) {
                postCard.disliked = !postCard.disliked;
                if (postCard.liked) {
                    postCard.liked = !postCard.liked;
                }
            }
            postCards.push(postCard);
        });
        this.setState({postCards: postCards});
    }

    changeFollowStatus() {
        var followed = this.state.followed;
        this.setState({followed: !followed});
        this.getFollowers()
    }

    render() {
        const {classes} = this.props;
        //console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        //console.log(this.state.info)
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
            this.setState({shareCopy:false})
        }
        return (
            <React.Fragment>
                <Snackbar open={this.state.shareCopy} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info">
                        Share link copied to clipboard!
                    </Alert>
                </Snackbar>
                <CssBaseline/>
                <Container>
                    <Typography component="div" style={{backgroundColor: 'white', height: '88vh',}}
                                className="border rounded">
                        <div className="d-flex justify-content-end p-2">
                            {this.formatSetting()}
                            <IconButton onClick={() => this.copyToClipboard(window.location.href)}
                                        aria-label="share">
                                <ShareIcon color={"primary"}/>
                            </IconButton>
                        </div>
                        <div className='mx-5'>
                            {this.formatAvatar()}
                        </div>
                        <Data name={this.state.profile.user.username} firstName={this.state.profile.user.first_name}
                              lastName={this.state.profile.user.last_name}
                              numberOfPosts={this.state.postCards.length}
                              numberOfFollowers={this.state.followers.length}
                              numberOfFollowings={this.state.followings.length} followers={this.state.followers}
                              followings={this.state.followings}/>
                        <Follow followed={this.state.followed} my_name={localStorage.getItem("username")}
                                username={this.state.profile.user.username} changeStatus={this.changeFollowStatus}/>
                        <SimpleTabs name1="Posts" name2="Channels" name3="Info" page="profile"
                                    postCards={this.state.postCards}
                                    channels={this.state.channels} onDisLike={this.handleDisLikePost}
                                    onLike={this.handleLikePost}
                                    profile={this.state.profile}
                                    postListStyle={this.postListStyle} className={classes.tabs}/>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    };

    formatAvatar() {
        return <ImageAvatars avatarSrc={this.state.profile.image} isList='false'/>
    }

    formatSetting() {
        if (this.state.profile.user.username !== localStorage.getItem("username"))
            return;
        else return <TransitionsModal content="edit profile" buttonName="setting" variant="contained"/>
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
        this.setState({shareCopy:true})
    };
}


export default withStyles(styles)(Profile);