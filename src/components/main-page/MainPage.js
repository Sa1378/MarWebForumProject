import React,{Component} from "react";
import PostsView from "./PostsView";
import SortBy from "./SortBy";

class MainPage extends Component{



    render(){
      return (
          <div>
              <SortBy/>
              <PostsView/>
          </div>
      );
    }
}

export default MainPage;