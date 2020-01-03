import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageAvatars from "./Avatar";
import SimpleTabs from "../TwoTab";
import Data from "./profileData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow";
import TransitionsModal from "../TransitionsModal";


class Profile extends Component {

    constructor(props) {
        super(props);
        this.handleLikePost = this.handleLikePost.bind(this);
        this.handleDisLikePost = this.handleDisLikePost.bind(this);
    }

    state = {
        my_name: 'reza',
        username: null,
        avatar_src: 'images/download.jpeg',
        numberOfPosts: 20,
        numberOfFollower: 354,
        numberOfFollowing: 323,
        followed: false,

        channels: [
            {id: 1, title: '1', creator: 'MarWeb_studio'},
            {id: 2, title: '2', creator: 'MarWeb_studio'},
            {id: 3, title: '3', creator: 'MarWeb_studio'},
            {id: 4, title: '4', creator: 'MarWeb_studio'},
            {id: 5, title: '5', creator: 'MarWeb_studio'},
        ],
        postCards: [
            {
                id: 1,
                author: 'alireza',
                title: 'Hello World',
                postSummary: 'this message is bullshit\nasfjasfjasf ',
                liked: true,
                disliked: false
            },
            {
                id: 2,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ',
                liked: false,
                disliked: true
            },
            {
                id: 3,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 4,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: true
            },
            {
                id: 5,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true,
                disliked: false
            },
            {
                id: 6,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false,
                disliked: false
            }
        ],
        follower: [
            {
                username: 'follower1',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'follower2',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'follower3',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'follower4',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'follower5',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'follower6',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }
        ], following: [
            {
                username: 'following1',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'following2',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'following3',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'following4',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'following5',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }, {
                username: 'following6sdsjgn;isgbaflgnafd;g',
                avatar_src: 'src/static/images/avatar/download.jpeg'
            }
        ]

    };

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


    componentDidMount() {
        this.setState(() => this.props.match.params);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Typography component="div" style={{backgroundColor: 'white', height: '88vh',}}
                                className="border rounded">
                        <div className="d-flex justify-content-end p-2">
                            {this.formatSetting()}
                        </div>
                        <div className='mx-5'>
                            {this.formatAvatar()}
                        </div>
                        <Data name={this.state.username} numberOfPosts={this.state.numberOfPosts}
                              numberOfFollower={this.state.numberOfFollower}
                              numberOfFollowing={this.state.numberOfFollowing} follower={this.state.follower}
                              following={this.state.following}/>
                        <Follow followed={this.state.followed} my_name={this.state.my_name}
                                username={this.state.username}/>
                        <SimpleTabs name1="Posts" name2="Channels" page="profile" postCards={this.state.postCards}
                                    channels={this.state.channels} onDisLike={this.handleDisLikePost}
                                    onLike={this.handleLikePost}
                                    postListStyle={this.postListStyle}/>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    };

    formatAvatar() {
        return <ImageAvatars avatarSrc={this.state.avatar_src} isList='false'/>
    }

    formatSetting() {
        if (this.state.username !== this.state.my_name)
            return;
        else return <TransitionsModal content="edit profile" buttonName="setting" variant="contained"/>
    }
}


export default Profile;