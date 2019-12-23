import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "../static/css/App.css";
import Header from "./Header";
import MainPage from "./MainPage";
import Login from "./Login";
import Register from "./Register"
import Profile from "./user profile/Profile";
import EditProfile from "./user profile/EditProfile";
import NewPost from "./NewPost";
import Channel from "./Channel";
import CreateChannel from "./CreateChannel";
import Notifications from "./Notifications";
import Search from "./Search";
import PostPage from "./post/PostPage";

class App extends Component {
    render() {
        return (<div style={{whiteSpace: "pre-wrap"}}>
                <Header/>
                <BrowserRouter>
                    <div className="mainContainer">
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/profile/:username" component={Profile}/>
                        <Route path="/editprofile" component={EditProfile}/>
                        <Route path="/newpost" component={NewPost}/>
                        <Route path="/channel/:channelName" component={Channel}/>
                        <Route path="/createchannel" component={CreateChannel}/>
                        <Route path="/notifications" component={Notifications}/>
                        <Route path="/search/:searchQuery" component={Search}/>
                        <Route path={"/post/:name"} component={PostPage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;