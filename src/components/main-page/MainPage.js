import React,{Component} from "react";
import PostsView from "./PostsView";
import SortBy from "./SortBy";

class MainPage extends Component{



    render(){
      const posts=[];
      for(let i=0;i<10;i++)
      {
         posts.push({id:i,title:"Some Important Sheet",author:"Mehrdad",text:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\
         heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\
         browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken\
         and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and\
         pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add\
         saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."})
      }
      return (
          <div>
              <SortBy/>
              <PostsView posts={posts}/>
          </div>
      );
    }
}

export default MainPage;