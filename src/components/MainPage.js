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
import PostCard from './post/PostCard'

const styles={
  cardContainer: {
    display:"flex",
    flexWrap:"wrap",
  },
  card: {
    display:"flex",
    flexDirection:"column",
    maxWidth: 345,
    margin:"0px 50px 50px 50px",
  },
  grow: {
      flexGrow:2,
  },
  media: {
    display:"none",
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
  preWrap: {
      whiteSpace:"pre-wrap",
  }
};




class MainPage extends Component{

    render(){
    const {classes}=this.props;
    class Post extends Component{
        
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


        const {classes,author,date,previewText}=this.props;
        return (
        <Card className={classes.card+" "+classes.preWrap}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={author}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent className={classes.preWrap}>
          <Typography variant="body2" color="textSecondary" component="p">
              {previewText}
          </Typography>
        </CardContent>
        <div className={classes.grow}/>
        <CardActions disableSpacing>    
          <IconButton aria-label="like" onClick={this.likePost} >
              <LikeIcon classes={classes} liked={this.state.liked}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        </Card>
        )}
    };
    return (
      <div className={classes.cardContainer+" "+classes.preWrap}>
          <Post classes={classes} author="Mehrdad" date="September 14, 2019" previewText="Why painful the sixteen how minuter looking nor.
            Subject but why ten earnest husband imagine sixteen brandon.
            Are unpleasing occasional celebrated motionless unaffected conviction out.
            Evil make to no five they. Stuff at avoid of sense small fully it whose an.
            Ten scarcely distance moreover handsome age although. As when have find fine or said no mile.
            He in dispatched in imprudence dissimilar be possession unreserved insensible.
            She evil face fine calm have now. Separate screened he outweigh of distance landlord."/>
          <Post classes={classes} author="Pashmak" date="September 14, 2019" previewText="Che khabare baw.
          <br/> \n Basse dg"/>
          <Post classes={classes} author="Mammad" date="September 14, 2019" previewText="Among going manor who did.
            Do ye is celebrated it sympathize considered.
            May ecstatic did surprise elegance the ignorant age.
            Own her miss cold last. It so numerous if he outlived disposal.
            How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution.
            Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford."/>
          <Post classes={classes} author="Mehrdad" date="September 14, 2019" previewText="Why painful the sixteen how minuter looking nor.
            Subject but why ten earnest husband imagine sixteen brandon.
            Are unpleasing occasional celebrated motionless unaffected conviction out.
            Evil make to no five they. Stuff at avoid of sense small fully it whose an.
            Ten scarcely distance moreover handsome age although. As when have find fine or said no mile.
            He in dispatched in imprudence dissimilar be possession unreserved insensible.
            She evil face fine calm have now. Separate screened he outweigh of distance landlord."/>
     </div>
  );
  }
}

export default withStyles(styles)(MainPage);