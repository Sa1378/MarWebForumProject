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
        this.changeFollowStatus=this.changeFollowStatus.bind(this);
        this.props.refreshToken();
    }

    
    componentWillMount(){
        this.getUserData()
        this.getFollowers()
        this.getFollowings()
        this.getPostCards()
        this.getChannels()
    }

    getChannels(){
        var currentComponent=this;
        fetch('http://localhost:8000/channel/channels/'+this.props.match.params.username,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log("Channel response")
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log("CHAAAANNEEEEEELLLLL")
            console.log(data)
            var tmp=[]
            for(let i=0;i<data.channels.length;i++){
                var channel=data.channels[i]
                console.log(channel.title)
                if(channel.title==currentComponent.props.match.params.username)continue;
                tmp.push({id:channel.id,title:channel.title,creator:channel.creator_username})
            }
            console.log(tmp);
            currentComponent.setState({channels:tmp})
            
        })
        .catch(function(err){
            console.log(err);
        })
    }

    getPostCards(){
        var currentComponent=this;
        fetch('http://localhost:8000/post/userposts/'+this.props.match.params.username,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log("POSTTTSSSSS")
            console.log(data)
            var tmp=[]
            for(let i=0;i<data.posts.length;i++){
                var post=data.posts[i];
                tmp.push({id:post.id,author:post.post_owner,title:post.title,postSummary:post.summary,liked:false,disliked:false});
            }
            currentComponent.setState({postCards:tmp});
        })
        .catch(function(err){
            console.log(err);
        })
    }

    getFollowings(){
        var currentComponent=this;
        fetch('http://localhost:8000/account/followings/'+this.props.match.params.username,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log("FOLOWINGSSSSSSSSSSS")
            console.log(data.followings)
            console.log()
            var tmp=[]
            for(let i=0;i<data.followings.length;i++){
                if(data.followings[i].resourcetype=="FollowChannel")continue;
                tmp.push({username:data.followings[i].target_name,avatar_src:'src/static/images/avatar/download.jpeg'})
            }
            console.log(tmp)
            currentComponent.setState({followings:tmp});
        })
        .catch(function(err){
            console.log(err);
        })
    }

    getFollowers(){
        var currentComponent=this;
        fetch('http://localhost:8000/account/followers/'+this.props.match.params.username,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log("FOLOWERSSSSSSSSSSSSSSSSSSS")
            console.log(data)
            var tmp=[]
            for(let i=0;i<data.followers.length;i++){
                if(data.followers[i].resourcetype=="FollowChannel")continue;
                if(data.followers[i].source_name==localStorage.getItem("username")){
                    currentComponent.setState({followed:true});
                    console.log("kjdsjkdsjkdskjdskj")
                }
                tmp.push({username:data.followers[i].source_name,avatar_src:'src/static/images/avatar/download.jpeg'})
            }
            console.log(tmp)
            currentComponent.setState({followers:tmp});
        })
        .catch(function(err){
            console.log(err);
        })
    }

    getUserData(){
        
        var currentComponent=this;
        fetch('http://localhost:8000/account/profile/'+this.props.match.params.username,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log(data)
            currentComponent.setState({profile:data})
        })
        .catch(function(err){
            console.log(err);
            window.location.href="/notfound";
        })
    }


    state = {
        profile:{age:null,telephone_number:null,user:{id:0, email:null, username:"loading...", password:null, first_name:null,last_name:null}},
        avatar_src: 'images/download.jpeg',
        followed: false,
        channels: [],
        postCards: [],
        followers: [],
        followings: []
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

    changeFollowStatus(){
        var followed=this.state.followed;
        this.setState({followed:!followed});
        this.getFollowers()
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
                        <Data name={this.state.profile.user.username} firstName={this.state.profile.user.first_name}
                              lastName={this.state.profile.user.last_name}
                              numberOfPosts={this.state.postCards.length}
                              numberOfFollowers={this.state.followers.length}
                              numberOfFollowings={this.state.followings.length} followers={this.state.followers}
                              followings={this.state.followings}/>
                        <Follow followed={this.state.followed} my_name={localStorage.getItem("username")}
                                username={this.state.profile.user.username} changeStatus={this.changeFollowStatus}/>
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
        if (this.state.profile.user.username !== localStorage.getItem("username"))
            return;
        else return <TransitionsModal content="edit profile" buttonName="setting" variant="contained"/>
    }
}


export default Profile;