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
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import {red} from "@material-ui/core/colors";
import LikeIcon from "./LikeIcon";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withStyles} from "@material-ui/core";
import img from '../../static/images/cards/wallpaper4.jpg'
import img2 from '../../static/images/cards/photyoe-LEqYrDZWLH4-unsplash.jpg'
import img3 from '../../static/images/avatar/download.jpeg'
import img4 from "../../static/images/avatar/photo_2020-01-02_22-01-43.jpg";
import img5 from "../../static/images/avatar/photo_2020-01-02_22-01-52.jpg";
import img6 from "../../static/images/avatar/photo_2020-01-02_22-01-58.jpg";
import img7 from "../../static/images/avatar/photo_2020-01-02_22-02-02.jpg";
import img8 from "../../static/images/avatar/photo_2020-01-02_22-02-06.jpg";
import img9 from "../../static/images/avatar/photo_2020-01-02_22-02-11.jpg";
import img10 from "../../static/images/avatar/photo_2020-01-02_22-02-15.jpg";
import img11 from "../../static/images/avatar/photo_2020-01-02_22-02-19.jpg";
const styles = theme => (
    {
        link: {
            color: "gray",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "none",
                color: "black",
            },
            "&:focus": {
                outline: "none",
            }
        }
    }
);


class PostCard extends Component {


    render() {
        const {classes} = this.props;
        return (
            <Card className="mt-3 w-100">
                <CardHeader
                    avatar={
                        <Avatar src={this.randomAvatarImage()} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton className={classes.link} aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={<Link className={classes.link + " nav-link" + " font-weight-bold font-italic"}
                                 style={{color: 'black'}}
                                 to={"/post/" + this.props.postCard.id}>{this.props.postCard.title}</Link>}
                    titleTypographyProps={{fontSize: "20px"}}
                    subheader={<Link className={classes.link + " nav-link"}
                                     to={"/profile/" + this.props.postCard.author}>{this.props.postCard.author}</Link>}
                />
                {this.randomImage()}
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
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.postSummary}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <Divider variant="middle"/>
                <CardActions>
                    <IconButton className={classes.link} onClick={() => this.props.onLike(this.props.postCard.id)}
                                aria-label="add to favorites">
                        <LikeIcon
                            liked={this.props.postCard.liked}/>
                    </IconButton>
                    <IconButton className={classes.link} aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }

    randomImage() {
        let a = (Math.floor(Math.random() * 2)) / 2 + 1;
        if (a === 1) {
            return <img src={img} width={'100%'}/>
        } else return <img src={img2} width={'100%'}/>
    }

    randomAvatarImage() {
        let number = (Math.floor(Math.random() * 9)) + 3;
        console.log("==> " + number);
        if (number === 3) {
            return img3
        } else if (number === 4) {
            return img4
        } else if (number === 5) {
            return img5
        } else if (number === 6) {
            return img6
        } else if (number === 7) {
            return img7
        } else if (number === 8) {
            return img8
        } else if (number === 9) {
            return img9
        } else if (number === 10) {
            return img10
        } else if (number === 11) {
            return img11
        } else return img
    }
}

export default withStyles(styles)(PostCard);