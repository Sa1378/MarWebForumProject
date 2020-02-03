import React, {Component} from "react";
import SortBy from "./SortBy";
import PostList from "../post/PostList";
import {Container} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles'
import Sidebar from './Sidebar';

const styles = {
    container: {
        display: "flex",
    }
}

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state={postCards:[]};
        this.handleLikePost = this.handleLikePost.bind(this);
        this.handleDisLikePost = this.handleDisLikePost.bind(this);
        this.handleShownPosts = this.handleShownPosts.bind(this);
    }

    componentWillMount() {
        this.props.refreshToken();
        setTimeout(function(){ }, 100);
        this.handleShownPosts("followed");
    }

    postListStyle = {
        width: '100vh',
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

    handleShownPosts(shownPosts){
        let currentComponent=this;
        console.log("MainPage: "+shownPosts)
        var url="http://localhost:8000/post/posts/"
        if(shownPosts=="followed"){
            url+="followed-channels-post";
        } else if(shownPosts=="newest"){
            url+="new-posts";
        } else if(shownPosts=="hottest"){
            url+="hot-posts";
        } else {
            url+="participated-posts";
        }
        console.log("access-token: "+localStorage.getItem("access-token"))
        fetch(url, { method: 'GET' ,
                headers:{
                        "Content-Type": "application/json", 
                        "Access-Control-Origin": "*",
                        'Authorization': 'Bearer ' + localStorage.getItem("access-token")
                }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log(data)
            currentComponent.setState({postCards:data.posts})
        })
        .catch(function(err){
            alert(err)
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <Container >
                <SortBy onChange={this.handleShownPosts}/>
                <div className={classes.container}>
                    <PostList onDisLike={this.handleDisLikePost}
                              onLike={this.handleLikePost}
                              postListStyle={this.postListStyle}
                              postCards={this.state.postCards}/>
                    <Sidebar/>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(MainPage);