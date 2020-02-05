import React, {Component} from "react";
import GridList from "@material-ui/core/GridList";
import PostCard from "../post/PostCard";


class PostList extends Component {


    render() {
       // console.log(this.props.postCards[0].summary)
        return (
            <GridList style={this.props.postListStyle}>
                {this.props.postCards.map(postCard => (
                    <PostCard onDisLike={this.props.onDisLike}
                              onLike={this.props.onLike}
                              postCard={postCard}
                              key={postCard.id}
                              title={postCard.title}
                              postSummary={postCard.postSummary}/>
                ))}
            </GridList>
        )
    }
}

export default PostList;