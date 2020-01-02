import React, {Component} from "react";
import {Container} from "@material-ui/core";
import SearchIn from './SearchIn'

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
        searchQuery:null,
    };

    componentDidMount () {
        this.setState(()=>this.props.match.params); // age dasti this.state ro meghdar bdim nmishe
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
            }
            postCards.push(postCard);
        });
        this.setState({postCards: postCards});
    }


    render() {
        return (
            <Container>
                <SearchIn />
                <div id="searchResult">
                    You've Searched {this.state.searchQuery} <span id="searchIn">in posts</span>!
                </div>
            </Container>
        );
    }
}

export default MainPage;
