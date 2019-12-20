import React, { Component } from "react";

class Channel extends Component{
    state={
        channelName:null,
    }
    componentDidMount () {
        this.setState(()=>this.props.match.params); // age dasti this.state ro meghdar bdim nmishe
    }
    render (){
        return (<div>
            This is {this.state.channelName} Channel Page!
        </div>
        );
    };
}

export default Channel;