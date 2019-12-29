import React, {Component} from "react";
import {Container} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PostCard from "../post/PostCard";


class PostList extends Component {

    state = {
        postCards: [
            {id: 1, title: 'Hello World', postSummary: 'this message is bullshit\nasfjasfjasf ', cols: 3},
            {id: 2, title: 'Bye World', postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ', cols: 3},
            {id: 3, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 4, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 5, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},
            {id: 6, title: 'Bye World', postSummary: 'this message is not bullshit ', cols: 3},

        ]
    };

    style = {
        width: '100vh',
        justifyContent: 'center',
    };


    render() {
        return (
            <Container className="d-flex justify-content-center" fixed>
                <GridList style={this.style} cellHeight={160}  cols={3}>
                    {this.state.postCards.map(tile => (
                        <PostCard  key={tile.id} title={tile.title} postSummary={tile.postSummary}/>
                    ))}
                </GridList>
            </Container>
        )
    }
}

export default PostList;