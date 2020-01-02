import React, {Component} from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';


class LikeIcon extends Component {


    render() {
        if (this.props.liked === true) {
            return (
                <FavoriteIcon style={{color: 'red'}}/>
            );
        } else {
            return (
                <FavoriteIcon/>
            );
        }
    }


}

export default LikeIcon;