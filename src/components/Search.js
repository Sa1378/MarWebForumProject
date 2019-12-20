import React, { Component } from "react";

class Search extends Component{
    state={
        searchQuery:null,
    }
    componentDidMount () {
        this.setState(()=>this.props.match.params); // age dasti this.state ro meghdar bdim nmishe
    }
    render (){
        return (<div>
            You've Searched {this.state.searchQuery}!
        </div>
        );
    };
}

export default Search;