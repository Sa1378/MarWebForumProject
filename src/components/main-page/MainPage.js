import React, {Component} from "react";
import SortBy from "./SortBy";
import PostList from "../post/PostList";
import {Container} from "@material-ui/core";

class MainPage extends Component {

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

        ],
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
            <Container>
                <SortBy/>
                <PostList onLike={this.handleLikePost} postListStyle={this.postListStyle}
                          postCards={this.state.postCards}/>
            </Container>
        );
    }
}

export default MainPage;