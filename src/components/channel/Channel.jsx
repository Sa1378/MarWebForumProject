import React, {Component} from "react";
import {Container} from "@material-ui/core";
import PostList from "../post/PostList";
import ChannelInfo from "./ChannelInfo";
import {StickyContainer, Sticky} from 'react-sticky';

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
                    <ChannelInfo/>
                </Container>
            </Container>
        )
    }
}

export default Channel;