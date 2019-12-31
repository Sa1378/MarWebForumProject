import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import EditProfile from "./user-profile/EditProfile";
import ListOfAccounts from "./user-profile/ListOfAccounts";

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
            <Button onClick={handleOpen} variant={props.variant} color="primary">{props.buttonName}</Button>
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

    function contentOfModal() {
        if (props.buttonName === 'setting') {
            return <EditProfile/>
        } else if (props.buttonName === 'follower') {
            return <ListOfAccounts/>
        } else if (props.buttonName === 'following') {
            return <ListOfAccounts/>
        }
    }
}
