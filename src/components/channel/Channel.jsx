import React, {Component} from "react";
import {Container} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PostCard from "../post/PostCard";


class Channel extends Component {

    state = {
        postCards: [
            {id: 1, title: 'Hello World', cols: 3},
            {id: 2, title: 'Bye World', cols: 3},
        ]
    };


    render() {
        return (
            <Container fixed>
                <GridList cellHeight={160} cols={3}>
                    {this.state.postCards.map(tile => (
                        <PostCard key={tile.id} title={tile.title}/>
                    ))}
                </GridList>
            </Container>

        )
    }


}

export default Channel;