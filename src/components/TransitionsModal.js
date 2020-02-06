import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import EditProfile from "./user profile/EditProfile";
import ListOfAccounts from "./user profile/ListOfAccounts";
import CreateChannel from "./channel/CreateChannel";
import NewPost from "./post/NewPost";
import IconButton from "@material-ui/core/IconButton";
import ReplyIcon from '@material-ui/icons/Reply';
import NewComment from "./post/NewComment";
import MenuItem from "@material-ui/core/MenuItem";
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeletePostAlert from "./post/DeletePostAlert";
import ChannelEdit from './channel/ChannelEdit';
import ChannelDelete from './channel/ChannelDelete';


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    link1: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: "black",
        },
        "&:focus": {
            outline: "none",
        },
    },
    link2: {
        color: "black",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: "black",
        },
        "&:focus": {
            outline: "none",
        }
    },
    outline: {
        "&:focus": {
            outline: "none",
        }
    }
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {handleButton()}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 2000,
                }}
            >
                <Fade in={open}>
                    {contentOfModal()}
                </Fade>
            </Modal>
        </React.Fragment>
    );

    function handleButton() {
        if (props.buttonName === 'reply') {
            return (
                <IconButton onClick={handleOpen} className={classes.link1} aria-label="Reply">
                    <ReplyIcon/>
                </IconButton>
            )
        } else if (props.buttonName === 'subscribers') {
            return (
                <MenuItem onClick={function () {
                    handleOpen();
                    props.onClose();
                }}>Subscribers</MenuItem>
            )
        } else if (props.buttonName === 'edit channel') {
            return (
                <MenuItem onClick={function () {
                    handleOpen();
                    props.onClose();
                }}>Edit</MenuItem>
            )
        } else if (props.buttonName === 'delete channel') {
            return (
                <MenuItem onClick={function () {
                    handleOpen();
                    props.onClose();
                }}>Delete</MenuItem>
            )
        } else if (props.buttonName === 'authors') {
            return (
                <MenuItem onClick={function () {
                    handleOpen();
                    props.onClose();
                }}>Authors</MenuItem>
            )
        } else if (props.buttonName === 'follower' || props.buttonName === 'following') {
            return (
                <Button className={classes.link2} onClick={handleOpen} variant=''
                        color="primary">{props.buttonName}</Button>
            )
        } else if (props.buttonName === 'setting') {
            return (
                <Button className={classes.link2} onClick={handleOpen} variant=''
                        color="primary"><SettingsIcon color='primary'/></Button>
            )
        } else if (props.buttonName === 'editPost' || props.buttonName === 'editComment') {
            return (
                <IconButton className={classes.link1} onClick={handleOpen} variant=''>
                    <EditIcon/>
                </IconButton>
            )
        } else if (props.buttonName === 'deletePost' || props.buttonName === 'deleteComment') {
            return (
                <IconButton className={classes.link1} onClick={handleOpen} variant=''>
                    <DeleteIcon/>
                </IconButton>
            )
        } else {
            return (
                <Button className={classes.link1} onClick={handleOpen} variant='contained'
                        color="secondary">{props.buttonName}</Button>
            )
        }
    }

    function contentOfModal() {
        if (props.buttonName === 'setting') {
            return <EditProfile/>
        } else if (props.buttonName === 'edit channel') {
            return <ChannelEdit authors={props.accounts} info={props.info}/>
        } else if (props.buttonName === 'delete channel') {
            return <ChannelDelete info={props.info}/>
        } else if (props.buttonName === 'follower') {
            return <ListOfAccounts listOfAccount={props.followers}/>
        } else if (props.buttonName === 'following') {
            return <ListOfAccounts listOfAccount={props.followings}/>
        } else if (props.buttonName === 'create channel') {
            return <CreateChannel accounts={props.accounts}/>
        } else if (props.buttonName === 'new post') {
            return <NewPost refreshToken={props.refreshToken}/>
        } else if (props.buttonName === 'reply') {
            return <NewComment postPage={props.postPage} comment={props.comment}/>
        } else if (props.buttonName === 'subscribers') {
            return <ListOfAccounts listOfAccount={props.accounts}/>
        } else if (props.buttonName === 'authors') {
            return <ListOfAccounts listOfAccount={props.accounts}/>
        } else if (props.buttonName === 'editPost') {
            return <NewPost post={props.post}/>
        } else if (props.buttonName === 'deletePost') {
            return <DeletePostAlert id={props.post.target_id} isPost={true}/>
        } else if (props.buttonName === 'editComment') {
            return <NewComment comment={props.comment} postPage={props.postPage} isEdit={true}/>
        } else if (props.buttonName === 'deleteComment') {
            return <DeletePostAlert comment_id={props.comment.target_id} id={props.post.target_id} isPost={false}/>
        }
    }
}
