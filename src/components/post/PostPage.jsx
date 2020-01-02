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
import Comment from "./Comment";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";
import NewComment from "./NewComment";
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

class PostPage extends Component {

    state = {
        comments: [
            {
                id: 1,
                message: 'First Comment',
                avatar_src: 'src/static/images/wallpaper4.jpg',
                name: 'alireza',
                loggedInUser: 'alireza'
            },
            {
                id: 2,
                message: 'Second Comment',
                avatar_src: 'src/static/images/wallpaper4.jpg',
                name: 'reza',
                loggedInUser: 'alireza'
            },
            {
                id: 3,
                message: 'Third Comment',
                avatar_src: 'src/static/images/wallpaper4.jpg',
                name: 'mehrdad',
                loggedInUser: 'alireza'
            },
            {
                id: 4,
                message: 'Fourth df;askdf;askdb\nComment',
                avatar_src: 'src/static/images/wallpaper4.jpg',
                name: 'alireza',
                loggedInUser: 'alireza'
            },
        ],
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Container>
                    {/*TODO add a side bar*/}
                </Container>

                <Container maxWidth={"lg"}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                </Avatar>
                            }
                            action={
                                <IconButton className={classes.link} aria-label="settings">
                                    <MoreVertIcon/>
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            image="../../static/images/cards/wallpaper4.jpg"
                            title="Paella dish"
                        />
                        {this.randomImage()}
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                        <Divider variant="middle"/>
                        <CardActions disableSpacing>
                            <IconButton className={classes.link} aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton className={classes.link} aria-label="share">
                                <ShareIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>

                    {this.state.comments.map(comment => <Comment
                        key={comment.id}
                        comment={comment}
                    />)}

                    <NewComment/>

                </Container>
            </React.Fragment>
        );
    }

    randomImage() {
        let a = (Math.floor(Math.random() * 2)) / 2 + 1;
        if (a === 1) {
            return <img src={img} width={'100%'}/>
        } else return <img src={img2}  width={'100%'}/>
    }

}

export default withStyles(styles)(PostPage);