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
        this.state = {postCards: []};
        this.handleShownPosts = this.handleShownPosts.bind(this);
        this.props.refreshToken();
    }

    componentWillMount() {
        this.handleShownPosts("followed");
    }

    postListStyle = {
        width: '100vh',
        justifyContent: 'center',
    };

    handleShownPosts(shownPosts) {
        let currentComponent = this;
        var url = "http://localhost:8000/post/posts/";
        if (shownPosts == "followed") {
            url += "followed-channels-post";
        } else if (shownPosts == "newest") {
            url += "new-posts";
        } else if (shownPosts == "hottest") {
            url += "hot-posts";
        } else {
            url += "participated-posts";
        }
        console.log(shownPosts)
        console.log("access-token: " + localStorage.getItem("access-token"));
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        })
            .then(function (response) {
                console.log(response)
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                let tmp = [];
                data.posts.reverse();
                let len=data.posts.length;
                console.log("POOOOOOOOOOOOOOOSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTSSSSSSSSS")
                console.log(data.posts)
                for (let i = 0; i < len; i++) {
                    let post = data.posts[i];
                    console.log(post);
                    fetch("http://localhost:8000/post/post-view/" + post.id, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Origin": "*",
                            'Authorization': 'Bearer ' + localStorage.getItem("access-token")
                        }
                    }).then(function (response) {
                        if (response.ok) {
                            return response.json()
                        }
                        window.location.href = "/notfound"
                    }).then(function (data2) {
                        console.log(data2);
                        console.log(post.id)
                        tmp.push(0)
                        post.liked=data2.post.liked;
                        post.disliked=data2.post.disliked;
                        console.log(post.id);
                        if(tmp.length==len){
                            tmp=[]
                            for(let i=0;i<len;i++){
                                let post=data.posts[i];
                                console.log(post)
                                tmp.push({
                                    id: post.id,
                                    author: post.post_owner,
                                    title: post.title,
                                    postSummary: post.summary,
                                    liked: post.liked,
                                    disliked: post.disliked,
                                    postMedia: post.media
                                });
                            }
                            console.log("SAAAAAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGGGG")
                            console.log(tmp);
                            currentComponent.setState({postCards: tmp});
                        }
                    }).catch(function (error) {
                        console.log(error)
                    })
                    
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    render() {
        const {classes} = this.props;
        console.log("POST CARDS:")
        console.log(this.state.postCards)
        return (
            <Container>
                <SortBy onChange={this.handleShownPosts}/>
                <div className={classes.container}>
                    <PostList postListStyle={this.postListStyle}
                              postCards={this.state.postCards}/>
                    <Sidebar refreshToken={this.props.refreshToken}/>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles)(MainPage);