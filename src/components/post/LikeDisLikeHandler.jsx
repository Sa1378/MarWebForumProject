import React, {Component} from "react";
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';


class LikeDisLikeHandler extends Component {


    render() {
        if (this.props.postCard.liked === true) {
            return (
                <React.Fragment>
                    <IconButton className={this.props.classes.link}
                                onClick={() => this.props.onLike(this.props.postCard.id)}
                                aria-label="like"
                    >
                        <FavoriteIcon style={{color: 'red'}}/>
                    </IconButton>
                    <IconButton className={this.props.classes.link}
                                onClick={() => this.props.onDisLike(this.props.postCard.id)}
                                aria-label="dislike"
                    >
                        <NotInterestedIcon/>
                    </IconButton>
                </React.Fragment>
            );
        } else if (this.props.postCard.disliked === true) {
            console.log("Dislike Kradddddddddddddddddddddddd", this.props.postCard.disliked, this.props.postCard.id);
            return (
                <React.Fragment>
                    <IconButton className={this.props.classes.link}
                                onClick={() => this.props.onLike(this.props.postCard.id)}
                                aria-label="like">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton className={this.props.classes.link}
                                onClick={() => this.props.onDisLike(this.props.postCard.id)}
                                aria-label="dislike"
                    >
                        <NotInterestedIcon style={{color: "red"}}/>
                    </IconButton>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <IconButton className={this.props.classes.link}
                                onClick={() => this.props.onLike(this.props.postCard.id)}
                                aria-label="like">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton className={this.props.classes.link}
                                onClick={() => this.props.onDisLike(this.props.postCard.id)}
                                aria-label="dislike"
                    >
                        <NotInterestedIcon/>
                    </IconButton>
                </React.Fragment>
            );
        }
    }


}

export default LikeDisLikeHandler;
