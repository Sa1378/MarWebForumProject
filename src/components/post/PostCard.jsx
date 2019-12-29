import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


class PostCard extends Component {


    render() {
        return (
            <Card className="mt-3 w-100">
                <Link to={'/post/' + this.props.postCard.id} style={this.style} className="nav-link">
                    <CardActionArea>
                        <CardMedia
                            // component={}
                            // alt={}
                            // height={}
                            // image={}
                            // title={}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.postSummary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }

}

export default PostCard;