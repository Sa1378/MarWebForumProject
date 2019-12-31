import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../static/images/avatar/download.jpeg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

const ImageAvatars = props => {
    const classes = useStyles();

    function formatAvatar() {
        if (props.avatar_src === null)
            return <Avatar className={classes.large}/>
        else {
            return <Avatar src={img} className={classes.large}/>
        }
    }

    return (
        <div className={classes.root + " d-flex justify-content-center"}>
            {formatAvatar()}
        </div>
    );


};
export default ImageAvatars


