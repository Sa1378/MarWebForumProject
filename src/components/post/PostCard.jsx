import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'


const styles={
    card: {
      display:"flex",
      flexDirection:"column",
      width: 310,
      height: 290,
      margin:"0px 30px 50px 30px",
    },
    grow: {
        flexGrow:2,
    },
    media: {
      display:"none", //TODO
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    liked: {
        color:"red",
    },
    notliked: {
        color:"black",
    },
    cardContent: {
        overflow:"hidden",
    },
    icon: {
        "&:focus":{
            outline:"none",
        }
    },
    link: {
        textDecoration:"none",
        color:"black",
        "&:hover":{
            textDecoration:"none",
            color:"black",
        }
    },
    title: {
    },
    author: {
        color:"gray",
        "&:hover":{
            color:"gray",
        }
    }
  };
  

class PostCard extends Component{
        
    constructor(props) {
        super(props);
        this.state = {liked: false};
        this.likePost = this.likePost.bind(this);
    }
    likePost(){
        console.log(this.state);
        this.setState({liked:!this.state.liked});
        console.log(this.state);
    }

    render(){
    
    class LikeIcon extends Component {
        render(){
            const {classes,liked}=this.props;
            if(liked===true)
            {
                return (
                    <FavoriteIcon className={classes.liked}/>
                );
            }
            else{
                return (
                    <FavoriteIcon className={classes.notliked}/>
                );
            }
        }
    }


    const {classes,id,title,author,previewText}=this.props;
    return (
    <Card className={classes.card+" "+classes.preWrap}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
           M
        </Avatar>
      }
      action={
        <IconButton aria-label="settings" className={classes.icon}>
           <MoreVertIcon />
         </IconButton>
      }
      title={<Link className={classes.link+" "+classes.title} to={"/post/"+id}>{title}</Link>}
      titleTypographyProps={{fontSize:"20px" }}
      subheader={<Link className={classes.link+" "+classes.author} to={"/profile/"+author}>{author}</Link>}
    />
    <CardMedia
      className={classes.media}
      image="/static/images/cards/paella.jpg"
      title="Paella dish"
    />
    <CardContent className={classes.cardContent}>
      <Typography variant="body2" color="textSecondary" component="p">
          {previewText}
      </Typography>
    </CardContent>
    <div className={classes.grow}/>
    <CardActions disableSpacing>    
      <IconButton aria-label="like" onClick={this.likePost} className={classes.icon}>
          <LikeIcon classes={classes} liked={this.state.liked}/>
      </IconButton>
      <IconButton aria-label="share" className={classes.icon}>
        <ShareIcon />
      </IconButton>
    </CardActions>
    </Card>
    )}
}

export default withStyles(styles)(PostCard);

/*

class PostCard extends Component {


    render() {
        return (
            <Card className="mt-3 w-100">
                <Link to={'/post/' + this.props.id} style={this.style} className="nav-link">
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
                <Divider variant="middle" />
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
*/