import React, {Component} from "react";
import {BrowserRouter, Route,Redirect} from "react-router-dom";
import "../static/css/App.css";
import Header from "./header/Header";
import MainPage from "./main-page/MainPage";
import Login from "./login/Login";
import Register from "./Register"
import Profile from "./user profile/Profile";
import EditProfile from "./user profile/EditProfile";
import NewPost from "./post/NewPost";
import Notifications from "./Notifications";
import Search from "./search/Search";
import PostPage from "./post/PostPage";
import Channel from "./channel/Channel";
import 'bootstrap/dist/css/bootstrap.css';
import CreateChannel from "./channel/CreateChannel";
import SignUp from "./login/SignUp";

class App extends Component {
    state = {
        my_name: 'reza'
    };

    render() {
        return (<div style={{whiteSpace: "pre-wrap"}}>
                {(false) ? (<Login/>):(
                <div>
                <Header/>
                <BrowserRouter>
                    <div className="mainContainer">
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/profile/:username" my_name={this.state.my_name} component={Profile}/>
                        <Route path="/editprofile/:username" component={EditProfile}/>
                        <Route path="/newpost" component={NewPost}/>
                        <Route path="/channel/:channelName" component={Channel}/>
                        <Route path="/channel/create" component={CreateChannel}/>
                        <Route path="/notifications" component={Notifications}/>
                        <Route path="/search/:searchQuery" component={Search}/>
                        <Route path={"/post/:name"} component={PostPage}/>
                        <Route path="/logout">
                            {localStorage.removeItem("username")}
                            <Redirect to="/login"/>
                        </Route>
                    </div>
                </BrowserRouter>
                </div>)
                }
            </div>
        );
    };

}

export default App;