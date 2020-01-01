import React, {Component} from "react";
import {Container} from "@material-ui/core";
import PostList from "../post/PostList";
import ChannelInfo from "./ChannelInfo";
import ChannelsList from "./ChannelsList";
import IconButton from "@material-ui/core/IconButton";
import LikeIcon from "../post/LikeIcon";
import CardActions from "@material-ui/core/CardActions";
import CreateChannelButton from "./CreateChannelButton";

class Channel extends Component {

    constructor(props) {
        super(props);
        this.handleLikePost = this.handleLikePost.bind(this);
    }


    state = {
        postCards: [
            {
                id: 1,
                author: 'alireza',
                title: 'Hello World',
                postSummary: 'this message is bullshit\nasfjasfjasf ',
                liked: true,
            },
            {
                id: 2,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ',
                liked: false,
            },
            {
                id: 3,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 4,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            },
            {
                id: 5,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 6,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            },
            {
                id: 7,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 8,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            },
            {
                id: 9,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            },
            {
                id: 10,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 11,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 12,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 13,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            },

        ],
        channels: [
            {id: 1, title: 'alireza', creator: 'MarWeb studio'},
            {id: 2, title: 'alireza', creator: 'MarWeb studio'},
            {id: 3, title: 'alireza', creator: 'MarWeb studio'},
            {id: 4, title: 'alireza', creator: 'MarWeb studio'},
            {id: 5, title: 'alireza', creator: 'MarWeb studio'},
        ],
        offset: 0,
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
            }
            postCards.push(postCard);
        });
        this.setState({postCards: postCards});
    }


    render() {
        return (
            <Container className="d-flex justify-content-center">
                <Container>
                    <ChannelInfo/>
                </Container>
                <Container className="">
                    <PostList onLike={this.handleLikePost} postListStyle={this.postListStyle}
                              postCards={this.state.postCards}/>
                </Container>
                <Container>
                    <ChannelsList channels={this.state.channels}/>
                </Container>
                <Container >
                    <CreateChannelButton/>
                </Container>
            </Container>
        )
    }
}

export default Channel;