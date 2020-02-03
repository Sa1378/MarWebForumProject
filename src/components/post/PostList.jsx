import React, {Component} from "react";
import GridList from "@material-ui/core/GridList";
import PostCard from "../post/PostCard";


class PostList extends Component {


    render() {
        return (
            <GridList style={this.props.postListStyle}>
                {this.props.postCards.map(postCard => (
                    <PostCard onDisLike={this.props.onDisLike}
                              onLike={this.props.onLike}
                              postCard={postCard}
                              key={postCard.id}
                              title={postCard.title}
                              postSummary={postCard.summary}/>
                ))}
            </GridList>
        )
    }
}

export default PostList;