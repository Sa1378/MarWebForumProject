import React, {Component} from "react";
import {Container} from "@material-ui/core";
import PostList from "../post/PostList";
import ChannelInfo from "./ChannelInfo";
import {StickyContainer, Sticky} from 'react-sticky';
import ChannelsList from "./ChannelsList";

class Channel extends Component {

    constructor(props) {
        super(props);
        this.handleLikePost = this.handleLikePost.bind(this);
    }


    state = {
        postCards: [
            {id: 1, title: 'Hello World', postSummary: 'this message is bullshit\nasfjasfjasf ', cols: 3},
            {
                id: 2,
                title: 'Bye World',
                postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ',
                cols: 3
            },
            {id: 3, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: true},
            {id: 4, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: false},
            {id: 5, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: true},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: false},
            {id: 7, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: true},
            {id: 8, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: false},
            {id: 9, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: false},
            {id: 10, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: true},
            {id: 11, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: true},
            {id: 12, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: true},
            {id: 13, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3, liked: false},

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
        console.log(this.state, "<=============");
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
            </Container>
        )
    }
}

export default Channel;