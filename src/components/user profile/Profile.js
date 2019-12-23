import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from '@material-ui/icons/Settings';
import ImageAvatars from "./Avatar";
import SimpleTabs from "./postOrChannel";
import Data from "./profileData";
import 'bootstrap/dist/css/bootstrap.min.css';
import Follow from "./follow";


class Profile extends Component {
    state = {
        my_name: 'reza',
        username: null,
        avatar_src: null,
        numberOfPosts: 20,
        numberOfFollower: 354,
        numberOfFollowing: 323,
        followed: false,
    };

    componentDidMount() {
        this.setState(() => this.props.match.params);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
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
                        <SimpleTabs/>
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
        else return <SettingsIcon fontSize="large"/>
    }
}


export default Profile;