import React, {Component} from "react";
import {fade, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, {bindTrigger, bindPopover} from 'material-ui-popup-state';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PeopleIcon from '@material-ui/icons/People';
import Button from "@material-ui/core/Button";
import {Icon} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Link} from 'react-router-dom'
import TransitionsModal from "../TransitionsModal";



const styles = theme => ({
    grow: {
        flexGrow: 2,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    link: {
        textDecoration: "none",
        color: "white",
        "&:hover": {
            color: "white",
            textDecoration: "none",
        }
    },
    toolbar: {
        width: "100%",
        boxSizing: "border-box",
        paddingLeft: "10px",
        paddingRight: "10px",
        margin: "0px",
    },
    appBar: {

        maxHeight: "64px",
    },
    icon: {
        "&:focus": {
            outline: "none",
        }
    },
    iconContainer: {
        display: "flex",
    },
    notifIcon: {
        marginRight: "2px",
        display: "inline",
    },
    notifMessage: {
        display: "inlien",
    },
    followIcon: {
        color: "Dodgerblue",
    },
    commentIcon: {
        color: "yellowgreen",
    },
    notifBox: {
        "&:hover": {
            backgroundColor: "rgb(240,240,240)",
            cursor: "pointer",
        }
    },
    newPostButton:{
        display:"inline",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    componentDidMount() {
        var searchTextField = document.getElementById("searchTextField");
        searchTextField.addEventListener("keypress", event => {
            var key = event.keyCode;
            console.log(key)
            if (key === 13) {
                window.location.href = "/search/" + searchTextField.value;
                //    this.props.history.push('/search'); dunno how the fuck to redirect this to search page
                searchTextField.value = "";
            }
        });
    }

    handleProfileClick() {
        window.location.href = "/profile";
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.title} variant="h6" noWrap href="/">
                            <a href="/" className={classes.link}>MarWeb</a>
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                id="searchTextField"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <div className={classes.grow}/>
                        <div className={classes.iconContainer}>
                            <PopupState variant="popover" popupId="demo-popup-popover">
                                {popupState => (
                                    <div>
                                        <div className={classes.newPostButton}>
                                            <TransitionsModal content="newpost" buttonName="new post" variant="contained" />
                                        </div>
                                      <IconButton aria-label="show new notifications" color="inherit"
                                                    className={classes.icon} {...bindTrigger(popupState)}>
                                            <Badge badgeContent={3} color="secondary" id="notifBadge">
                                                <NotificationsIcon/>
                                            </Badge>
                                        </IconButton>
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <Box p={2} className={classes.notifBox} onClick={() => {
                                                window.location.href = "/profile/Mahdis";
                                            }}>
                                                <PeopleIcon
                                                    className={classes.notifIcon + " " + classes.followIcon}/> Mahdis
                                                followed you
                                            </Box>
                                            <Box p={2} className={classes.notifBox} onClick={() => {
                                                window.location.href = "/post/1";
                                            }}>
                                                <ChatBubbleIcon
                                                    className={classes.notifIcon + " " + classes.commentIcon}/> Mohammad
                                                commented on your post
                                            </Box>
                                            <Box p={2} className={classes.notifBox} onClick={() => {
                                                window.location.href = "/profile/Akbar";
                                            }}>
                                                <PeopleIcon
                                                    className={classes.notifIcon + " " + classes.followIcon}/> Akbar
                                                followed you
                                            </Box>
                                        </Popover>
                                    </div>
                                )}
                            </PopupState>

                            <IconButton className={classes.icon}
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-haspopup="true"
                                        onClick={this.handleProfileClick}
                                        color="inherit"
                            >

                                <AccountCircle/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);


/*
const styles = {
    element: {
        margin:"10px",
    },
    button: {
        marginTop:"0px",
    }
};


class Header extends Component{

    componentDidMount(){
        var searchTextField=document.getElementById("searchTextField");
        searchTextField.addEventListener("keypress",event=>{
            var key=event.keyCode;
            if(key===13)
            {
            //    this.props.history.push('/search'); dunno how the fuck to redirect this to search page
                searchTextField.value="";
            }
        });
    }

    render(){
        const {classes}=this.props;
        return (
            <header>
                <a href="/" className="title left">This is Header!</a>
                <div>
                    <TextField id="searchTextField" className={classes.element+" "+classes.button} label="Search" />
                    <Button href="/login" className={classes.element} variant="contained" color="primary">Login</Button>
                </div>
            </header>
        );
    };
}

export default withStyles(styles)(Header); // chon byd az function haie martabe balatr estefade konim vase override krdne material
*/