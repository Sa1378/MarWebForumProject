import React, { Component } from "react";

class Profile extends Component{
    state={
        username:null,
    }
    componentDidMount () {
        this.setState(()=>this.props.match.params); // age dasti this.state ro meghdar bdim nmishe
    }
    render (){
        return (<div>
            This is {this.state.username}'s Profile Page!
        </div>
        );
    };
}

export default Profile;