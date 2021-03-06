import React, {Component} from "react";
import {BrowserRouter, Route,Redirect} from "react-router-dom";
import "../static/css/App.css";
import Header from "./header/Header";
import MainPage from "./main-page/MainPage";
import Login from "./login/Login";
import Profile from "./user profile/Profile";
import EditProfile from "./user profile/EditProfile";
import NewPost from "./post/NewPost";
import Search from "./search/Search";
import PostPage from "./post/PostPage";
import Channel from "./channel/Channel";
import 'bootstrap/dist/css/bootstrap.css';
import CreateChannel from "./channel/CreateChannel";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";

class App extends Component {

    constructor(props){
        super(props);
        this.refreshToken=this.refreshToken.bind(this);
    }

    refreshToken(){
        var data={refresh:localStorage.getItem("refresh-token")}
        fetch("http://localhost:8000/account/token/refresh", {
                method: "POST",
                headers: {"Content-Type": "application/json",
                         "Access-Control-Origin": "*"},
                body: JSON.stringify(data)
        })
        .then(function(response){
            //console.log("refresshhh "+response)
            if(response.status=="200"){
                //console.log(response)
                //
                return response.json();
            }
            throw new Error();
        })
        .then(function(data){
            //console.log("||||||||||||||||||||||||||||||||||||||||")
            //console.log(data.access)
            //console.log(localStorage.getItem("access-token"))
            if(localStorage.getItem("access-token")==data.access)return
            localStorage.setItem("access-token",data.access)
        //    window.location.reload();
        })
        .catch(function(){
            //console.log("change page")
            window.location.href="login/"
        });
    }

    render() {
        return (<div style={{whiteSpace: "pre-wrap"}}>
                {(false) ? (<Login/>):(
                <div>
                <Header refreshToken={this.refreshToken}/>
                <BrowserRouter>
                    <div className="mainContainer">
                        <Route exact path="/" render={(props) => <MainPage {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/profile/:username" render={(props) => <Profile {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path="/editprofile/:username" render={(props) => <EditProfile {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path="/newpost" render={(props) => <NewPost {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path="/channel-create" render={(props) => <CreateChannel {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path="/channel/:channelId" render={(props) => <Channel {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path="/search/:searchQuery" render={(props) => <Search {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path={"/post/:name"} render={(props) => <PostPage {...props} refreshToken={this.refreshToken}/>}/>
                        <Route path={"/password/reset"} component={ForgotPassword}/>
                        <Route path={"/notfound"} render={(props) => <NotFound {...props} refreshToken={this.refreshToken}/>}/>
                    </div>
                </BrowserRouter>
                </div>)
                }
            </div>
        );
    };

}

export default App;