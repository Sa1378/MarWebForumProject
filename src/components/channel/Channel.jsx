import React, {Component} from "react";
import {Container} from "@material-ui/core";
import PostList from "../post/PostList";
import ChannelInfo from "./ChannelInfo";
import ChannelsList from "./ChannelsList";

class Channel extends Component {

    state = {
        postCards: [
            {id: 1, title: 'Hello World', postSummary: 'this message is bullshit\nasfjasfjasf ', cols: 3},
            {
                id: 2,
                title: 'Bye World',
                postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ',
                cols: 3
            },
            {id: 3, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 4, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 5, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},

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


    render() {
        return (
            <Container className="d-flex justify-content-center">
                <Container>
                    <ChannelInfo/>
                </Container>
                <Container className="">
                    <PostList postListStyle={this.postListStyle} postCards={this.state.postCards}/>
                </Container>
                <Container>
                    <ChannelsList channels={this.state.channels}/>
                </Container>
            </Container>
        )
    }
}

export default Channel;