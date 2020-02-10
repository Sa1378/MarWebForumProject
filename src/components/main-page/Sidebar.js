import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import TransitionsModal from "../TransitionsModal";

const styles={
    container:{
        margin:"15px 0px 0px 60px",
        display:"flex",
        flexFlow:"column",
        width:"20%",
        minWidth:"200px",
    },
    item:{
        marginBottom:"20px",
        width:"100%",
        padding:"10px",
    },
    rankBadge:{
        margin:"0px 15px 0px 5px",
    },
    link:{
        textDecoration:"none",
        color:"black",
        "&:hover":{
            textDecoration:"none",
        }
    },
    rankItem:{
        margin:"10px 0px",
    },
    firstItem:{
        marginTop:"20px",
    },
    small:{
        fontSize:"10px",
        color:"black",
    },
    medium:{
        fontSize:"12px",
        marginLeft:"5px",
        display:"block",
        color:"black",
        "&:hover":{
            textDecoration:"none",
        }
    },
    firstSmall:{
        marginTop:"10px",
    },
    firstMedium:{
        marginTop:"5px",
    },
    sticky:{
        position: "sticky",
        top: "70px",
    }

};

class Sidebar extends Component{

    constructor(props){
        super(props);
        this.getUsers=this.getUsers.bind(this);
        this.getChannels=this.getChannels.bind(this);
    }

    state={
        users:[],
        channels:[]
    }

    componentWillMount(){
        this.getUsers()
        this.getChannels()
    }

    getUsers(){
        var currentComponent=this;
        fetch('http://localhost:8000/account/users',{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            //console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            //console.log("INFOOOOOOOOOOOOOOOOO")
            //console.log(data)
            var tmp=[]
            for(let i=0;i<5;i++){
                if(i==data.users.length)break;
                tmp.push({username:data.users[i].username,id:i+1})
            }
            currentComponent.setState({users:tmp});
        })
        .catch(function(err){
            //console.log(err);
        })
    }

    getChannels(){
        var currentComponent=this;
        fetch('http://localhost:8000/channel/top-channels',{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            //console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            //console.log("INFOOOOOOOOOOOOOOOOO")
            //console.log(data)
            var tmp=[]
            for(let i=0;i<data.channels.length;i++){
                if(tmp.length==5)break;
                if(data.channels[i].main_channel)continue;
                let x=tmp.length;
                tmp.push({title:data.channels[i].title,id:data.channels[i].id,num:x+1})
            }
            currentComponent.setState({channels:tmp});
        })
        .catch(function(err){
            //console.log(err);
        })
    }

    render(){
        const {classes}=this.props;
        return (
            <div className={classes.container}>
                <TransitionsModal content="newpost" buttonName="new post" variant="contained" refreshToken={this.props.refreshToken}/>
                <Paper className={classes.item+" "+classes.firstItem}>
                    Top Users:
                    {this.state.users.map(user=>{return (
                        <div className={classes.rankItem}> <Badge badgeContent={user.id} color="primary" className={classes.rankBadge}/>
                        <Link to={"/profile/"+user.username} className={classes.link}>{user.username}</Link>
                    </div>
                    )})}
                </Paper>
                <Paper className={classes.item}>
                    Top Channels:
                    {this.state.channels.map(channel=>{return (
                        <div className={classes.rankItem}> <Badge badgeContent={channel.num} color="primary" className={classes.rankBadge}/>
                        <Link to={"/channel/"+channel.id} className={classes.link}>{channel.title}</Link>
                    </div>
                    )})}
                </Paper>
                <Paper className={classes.item}>
                    Marweb
                    <a href="/" className={classes.medium+" "+classes.firstMedium}>About</a>
                    <a href="/" className={classes.medium}>Careers</a>
                    <a href="/" className={classes.medium}>Help</a>
                    <div className={classes.small+" "+classes.firstSmall}>
                        <a href="/">Terms</a>|<a href="/">Content Policy</a>|<a href="/">Privacy Policy</a>|<a href="/">Mod Policy</a>
                    </div>
                    <div className={classes.small}>Marweb Inc © 2020. All rights reserved</div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);