import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PostCard from "../post/PostCard"

const styles={
  cardContainer: {
    display:"flex",
    flexFlow:"wrap",
  },
};


class PostsView extends Component{

    render(){
    const {classes,posts}=this.props;
    return (
      <div className={classes.cardContainer}>
          {
              posts.map(post=>(
                  <PostCard id={post.id} title={post.title} author={post.author} previewText={post.text}/>
              ))
          }

     </div>
  );
  }
}

export default withStyles(styles)(PostsView);