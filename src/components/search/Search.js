import React, {Component} from "react";
import {Container} from "@material-ui/core";
import SearchIn from './SearchIn'
import PostList from "../post/PostList";
import Sidebar from "../main-page/Sidebar";
import ChannelsList from "../channel/ChannelsList";
import ListOfAccounts from "../user profile/ListOfAccounts";

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {postCards: [], channels: [], accounts: [], dataShowKind: "posts"};
        this.handleLikePost = this.handleLikePost.bind(this);
        this.handleDisLikePost = this.handleDisLikePost.bind(this);
        this.handleShownData = this.handleShownData.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.setState(() => this.props.match.params);
        this.handleShownData("posts");
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

    getData() {
        var currentComponent = this;
        fetch('http://localhost:8000/homepage/search/' + this.props.match.params.searchQuery, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        })
            .then(function (response) {
                //console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                let posts = [];
                data.posts.reverse();
                for (let i = 0; i < data.posts.length; i++) {
                    let post = data.posts[i];
                    posts.push({
                        id: post.id,
                        author: post.post_owner,
                        title: post.title,
                        postSummary: post.summary,
                        liked: post.liked,
                        disliked: post.disliked,
                        postMedia: "http://localhost:8000" + post.media
                    });
                }
                currentComponent.setState({postCards: posts});

                let channels = [];
                for (let i = 0; i < data.channels.length; i++) {
                    let channel = data.channels[i];
                    channels.push({id: channel.id, title: channel.title, creator: channel.creator_username})
                }

                currentComponent.setState({channels: channels});

                let accounts = [];
                for (let i = 0; i < data.accounts.length; i++) {
                    accounts.push({
                        username: data.accounts[i].username,
                        avatar_src: data.accounts[i].profile.image
                    })
                }
                //console.log(accounts);
                currentComponent.setState({accounts: accounts});
            })
            .catch(function (err) {
                //console.log(err);
            //    window.location.href = "/notfound";
            })
    }

    handleShownData(shownDataKind) {
        this.setState({dataShowKind: shownDataKind});
        this.getData();
    }

    showData() {
        //console.log(this.state);
        if (this.state.dataShowKind === "posts") {
            return (
                <React.Fragment>
                    <div className="float-left">
                        <PostList onDisLike={this.handleDisLikePost}
                                  onLike={this.handleLikePost}
                                  postListStyle={this.postListStyle}
                                  postCards={this.state.postCards}/>
                    </div>
                    <div className='float-right'>
                        <Sidebar refreshToken={this.props.refreshToken}/>
                    </div>
                </React.Fragment>
            )

        } else if (this.state.dataShowKind === "channels") {
            return (
                <React.Fragment>
                    <div className="float-left">
                        <ChannelsList channels={this.state.channels}/>
                    </div>
                    <div className='float-right'>
                        <Sidebar refreshToken={this.props.refreshToken}/>
                    </div>
                </React.Fragment>
            )
        } else if (this.state.dataShowKind === "users") {
            return (
                <React.Fragment>
                    <div className="float-left">
                        <ListOfAccounts listOfAccount={this.state.accounts}/>
                    </div>
                    <div className='float-right'>
                        <Sidebar refreshToken={this.props.refreshToken}/>
                    </div>
                </React.Fragment>
            )
        }
    }


    render() {
        return (
            <Container>
                <SearchIn onChange={this.handleShownData}/>
                <div id="searchResult">
                    {this.showData()}
                </div>
            </Container>
        );
    }
}

export default MainPage;
