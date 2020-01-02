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
import Menu from "@material-ui/core/Menu";


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
    link: {
        color: "white",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: "black",
        },
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
                <IconButton onClick={handleOpen} className={classes.link} aria-label="Reply">
                    <ReplyIcon/>
                </IconButton>
            )
        } else if (props.buttonName === 'subscribers') {
            console.log("Dakhele Ifeeeeeeeeeeeeeeeeeee");
            return (
                <MenuItem onClick={function () {
                    handleOpen();
                    props.onClose();
                }}>Subscribers</MenuItem>
            )

        } else {
            return (
                <Button className={classes.link} onClick={handleOpen} variant={props.variant}
                        color="primary">{props.buttonName}</Button>
            )
        }
    }

    function contentOfModal() {
        if (props.buttonName === 'setting') {
            return <EditProfile/>
        } else if (props.buttonName === 'follower') {
            return <ListOfAccounts listOfAccount={props.follower}/>
        } else if (props.buttonName === 'following') {
            return <ListOfAccounts listOfAccount={props.following}/>
        } else if (props.buttonName === 'create channel') {
            return <CreateChannel accounts={props.accounts}/>
        } else if (props.buttonName === 'new post') {
            return <NewPost/>
        } else if (props.buttonName === 'reply') {
            return <NewComment/>
        } else if (props.buttonName === 'subscribers') {
            return <ListOfAccounts/>
        }
    }
}
