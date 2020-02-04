import React, { Component } from "react";

class NotFound extends Component{
    
    constructor(props){
        super(props);
        this.props.refreshToken();
    }

    render(){
        return (
            <div style={{textAlign:"center",marginTop:"100px",
                fontSize:"80px",fontFamily:"Impact, Charcoal, sans-serif",color:"DarkBlue",userSelect: "none"}}>
                404 Not Found!
            </div>
        );
    }
}

export default NotFound;