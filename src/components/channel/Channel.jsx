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
    }


    state = {
        postCards: [
            {
                id: 1,
                author: 'alireza',
                title: 'Hello World',
                postSummary: 'this message is bullshit\nasfjasfjasf ',
                liked: true,
                disliked: false
            },
            {
                id: 2,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ',
                liked: false,
                disliked: true
            },
            {
                id: 3,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 4,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: true
            },
            {
                id: 5,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 6,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: false
            },
            {
                id: 7,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 8,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: true
            },
            {
                id: 9,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: true
            },
            {
                id: 10,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 11,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 12,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 13,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: false
            },

        ],
        channels: [
            {id: 1, creator: 'alireza', title: 'MarWeb studio'},
            {id: 2, creator: 'alireza', title: 'MarWeb studio'},
            {id: 3, creator: 'alireza', title: 'MarWeb studio'},
            {id: 4, creator: 'alireza', title: 'MarWeb studio'},
            {id: 5, creator: 'alireza', title: 'MarWeb studio'},
        ],
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
                    <ChannelInfo loggedInUser={this.state.loggedInUser} channelFounder={this.state.channelFounder}/>
                </Container>
                <Container className="">
                    <PostList onDisLike={this.handleDisLikePost}
                              onLike={this.handleLikePost}
                              postListStyle={this.postListStyle}
                              postCards={this.state.postCards}/>
                </Container>
                <Container>
                    <ChannelsList channels={this.state.channels}/>
                </Container>
                <Container>
                    <CreateChannelButton accounts={this.state.accounts}/>
                </Container>
            </Container>
        )
    }
}

export default Channel;