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
        const {classes} = this.props;
        return (
            <Container >
                <SortBy/>
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