import React, {Component} from "react";
import {Container} from "@material-ui/core";
import PostList from "../post/PostList";
import ChannelInfo from "./ChannelInfo";
import ChannelsList from "./ChannelsList";
import CreateChannelButton from "./CreateChannelButton";

class Channel extends Component {

    constructor(props) {
        super(props);
        this.handleLikePost = this.handleLikePost.bind(this);
        this.handleDisLikePost = this.handleDisLikePost.bind(this);
        this.follow=this.follow.bind(this);
        this.unfollow=this.unfollow.bind(this);
        this.props.refreshToken();
    }

    componentWillMount(){
        this.getInfo();
        this.getPostCards();
    }

    getInfo(){
        var currentComponent=this;
        fetch('http://localhost:8000/channel/channel/'+this.props.match.params.channelId,{
                method:"GET",
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
            console.log("INFOOOOOOOOOOOOOOOOO")
            console.log(data)
            currentComponent.setState({info:data.channel})
        })
        .catch(function(err){
            console.log(err);
        })
    }

    getPostCards(){
        var currentComponent=this;
        fetch('http://localhost:8000/post/channelposts/'+this.props.match.params.channelId,{
                method:"GET",
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
            console.log("POSTTTSSSSS")
            console.log(data)
            var tmp=[]
            for(let i=0;i<data.posts.length;i++){
                var post=data.posts[i];
                tmp.push({id:post.id,author:post.post_owner,title:post.title,postSummary:post.summary,liked:false,disliked:false});
            }
            console.log(tmp);
            currentComponent.setState({postCards:tmp});
        })
        .catch(function(err){
            console.log(err);
        })
    }


    state = {
        postCards: [],
        info:{followers_channel:[],authors:[]},
        offset: 0,
        accounts: [
            'alireza',
            'reza',
            'mehrdad',
            'fereydoon',
            'kambiz',
            'yaghoob',
        ],
        loggedInUser: [
            'reza',
        ],
        channelFounder: [
            'alireza'
        ]
    };

    postListStyle = {
        width: '100vh',
        justifyContent: 'center',
    };

    follow(){
        console.log("FOLLOOOWWWWW")
        var currentComponent=this;
        fetch('http://localhost:8000/channel/followchannel/'+this.props.match.params.channelId,{
                method:"POST",
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
            console.log("POSTTTSSSSS")
            console.log(data)
        })
        .catch(function(err){
            console.log(err);
        })
        this.getInfo();
    }

    unfollow(){
        var currentComponent=this;
        fetch('http://localhost:8000/channel/followchannel/'+this.props.match.params.channelId,{
                method:"DELETE",
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
            console.log("POSTTTSSSSS")
            console.log(data)
        })
        .catch(function(err){
            console.log(err);
        })
        this.getInfo();
    }

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


    render() {
        return (
            <Container className="d-flex justify-content-center">
                <Container>
                    <ChannelInfo followers={this.state.info.followers_channel.map(follow=>{return {username:follow.source_name,avatar_src:'src/static/images/avatar/download.jpeg'}})}
                    authors={this.state.info.authors.map(author=>{return {username:author.username,avatar_src:'src/static/images/avatar/download.jpeg'}})}
                     info={this.state.info} follow={this.follow} unfollow={this.unfollow}/>
                </Container>
                <Container className="">
                    <PostList onDisLike={this.handleDisLikePost}
                              onLike={this.handleLikePost}
                              postListStyle={this.postListStyle}
                              postCards={this.state.postCards}/>
                </Container>
                <Container>
                    <CreateChannelButton accounts={this.state.accounts}/>
                </Container>
            </Container>
        )
    }
}

export default Channel;