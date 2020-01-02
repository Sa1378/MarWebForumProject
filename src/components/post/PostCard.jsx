import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import LikeIcon from "./LikeIcon";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withStyles} from "@material-ui/core";
import img from '../../static/images/cards/wallpaper4.jpg'
import img2 from '../../static/images/cards/photyoe-LEqYrDZWLH4-unsplash.jpg'

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
                        <Avatar aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton className={classes.link} aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={<Link className={classes.link + " nav-link font-weight-bold font-italic"}
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
            return <img src={img} width={'100%'} alt="Can't be shown."/>
        } else return <img src={img2} width={'100%'} alt="Can't be shown."/>
    }

}

export default withStyles(styles)(PostCard);