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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withStyles} from "@material-ui/core";
import LikeDisLikeHandler from "./LikeDisLikeHandler";
import Badge from "@material-ui/core/Badge";
import ScoreIcon from '@material-ui/icons/Score';
import ImageAvatar from '../user profile/Avatar';


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
        },
        card: {
            backgroundColor: "rgb(240,240,240)",
            marginBottom: "20px",
            padding: "10px",
        }
    }
);


class PostCard extends Component {
    state = {
        avatar: {}
    }

    render() {
        const {classes} = this.props;
        console.log("EEEEEEEEEEEEEEEEEEEZZZZZZZZZZZZZZZZZZZZ")
        console.log(this.state.avatar)
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={<ImageAvatar avatarSrc={this.state.avatar} isList="true"/>}
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
                {this.showMedia()}
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
                    <LikeDisLikeHandler classes={classes}
                                        onLike={this.props.onLike}
                                        onDisLike={this.props.onDisLike}
                                        postCard={this.props.postCard}/>
                    <IconButton id="share" onClick={() => this.copyToClipboard(window.location.href)}
                                className={classes.link} aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <Badge badgeContent={120} color={'primary'}>
                        <ScoreIcon/>
                    </Badge>
                </CardActions>
            </Card>
        );
    }

    showMedia() {
        console.log("MMMMMEEDDDIIIAAAAAAAAAAAAAAAAAAAAAa");
        console.log(this.props.postMedia);
        return (
            <img src={this.props.postMedia} width={'100%'} style={{maxWidth: "600px", minWidth: "600px"}}
                 alt="Can't be shown."/>
        )
    }

    componentWillMount() {
        var currentComponent = this;
        fetch('http://localhost:8000/account/profile/' + this.props.postCard.author, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        })
            .then(function (response) {
                console.log(response)
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {

                console.log("DAAAATTAAAAAAAAAAAAAAAAAAAAAAAAAAa");
                console.log(data.image);
                currentComponent.setState({avatar: data.image});

            })
            .catch(function (err) {
                console.log(err);
                //    window.location.href="/notfound";
            })
    }


    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
        alert("Share link copied to clipboard")
    };

}

export default withStyles(styles)(PostCard);