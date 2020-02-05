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
        info:{followers_channel:[]},
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
                    <ChannelInfo info={this.state.info}/>
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