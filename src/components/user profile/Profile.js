import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageAvatars from "./Avatar";
import SimpleTabs from "../TwoTab";
import Data from "./profileData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow";
import TransitionsModal from "../Modal";


class Profile extends Component {
    state = {
        my_name: 'reza',
        username: null,
        avatar_src: 'images/download.jpeg',
        numberOfPosts: 20,
        numberOfFollower: 354,
        numberOfFollowing: 323,
        followed: false,
        follower: [
            {name: 'rez',}
        ], channels: [
            {id: 1, title: '1', creator: 'MarWeb studio'},
            {id: 2, title: '2', creator: 'MarWeb studio'},
            {id: 3, title: '3', creator: 'MarWeb studio'},
            {id: 4, title: '4', creator: 'MarWeb studio'},
            {id: 5, title: '4', creator: 'MarWeb studio'},
        ], postCards: [
            {
                id: 1,
                author: 'alireza',
                title: 'Hello World',
                postSummary: 'this message is bullshit\nasfjasfjasf ',
                liked: true,
            },
            {
                id: 2,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit\nlsakfja;lskdjf;alksjdf;lasjf ',
                liked: false,
            },
            {
                id: 3,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 4,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            },
            {
                id: 5,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: true
            },
            {
                id: 6,
                author: 'alireza',
                title: 'Bye World',
                postSummary: 'this message is not bullshit ',
                liked: false
            }]
    };


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
                        {this.formatAvatar()}
                        <Data name={this.state.username} numberOfPosts={this.state.numberOfPosts}
                              numberOfFollower={this.state.numberOfFollower}
                              numberOfFollowing={this.state.numberOfFollowing}/>
                        <Follow followed={this.state.followed} my_name={this.state.my_name}
                                username={this.state.username}/>
                        <SimpleTabs name1="Posts" name2="Channels" page="profile" posts={this.state.postCards}
                                    channels={this.state.channels}/>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    };

    formatAvatar() {
        return <ImageAvatars avatarSrc={this.state.avatar_src}/>
    }

    formatSetting() {
        if (this.state.username !== this.state.my_name)
            return;
        else return <TransitionsModal content="edit profile" buttonName="setting" variant="contained"/>
    }
}


export default Profile;