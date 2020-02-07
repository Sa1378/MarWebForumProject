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
import TransitionsModal from "../TransitionsModal";
import Button from '@material-ui/core/Button';
import {bindHover, bindPopper} from "material-ui-popup-state/core";


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
    newPostButton: {
        display: "inline",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    logoutButton: {
        color: "white",
        fontSize: "10px",
        marginLeft: "5px",
    }
});

class Header extends Component {
    state = {
        notifications: [],
        badgeContent: 0
    };

    constructor(props) {
        super(props);
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.clickNotif = this.clickNotif.bind(this);
    }

    clickNotif() {
        console.log("hi")
        this.sendRequest(this);
        fetch("http://localhost:8000/notification/seen", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        }).then(function (response) {
            if (response.ok) {
            }
            throw new Error("Server Error!");
        }).catch(function (error) {
            console.log(error)
        })
        this.setState({badgeContent: 0})
    }

    componentDidMount() {
        if (!localStorage.getItem("access-token")) return;
        var searchTextField = document.getElementById("searchTextField");
        searchTextField.addEventListener("keypress", event => {
            var key = event.keyCode;
            console.log(key);
            if (key === 13) {
                window.location.href = "/search/" + searchTextField.value;
                //    this.props.history.push('/search'); dunno how the fuck to redirect this to search page
                searchTextField.value = "";
            }
        });
        let myThis = this;
        setInterval(() => this.sendRequest(myThis), 10000);

        setInterval(this.props.refreshToken, 240000);

    }

    sendRequest(myThis) {
        fetch("http://localhost:8000/notification/notifications", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        }).then(function (response) {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Server Error!");
        }).then(function (data) {
            myThis.setState({notifications: data.notifications});
            myThis.setState({badgeContent: data.notifications.length})

        }).catch(function (error) {
            console.log(error)
        })
    }

    handleProfileClick() {
        window.location.href = "/profile/" + localStorage.getItem("username");
    }

    notificationType(type, classes) {
        if (type === "comment") {
            return classes.commentIcon
        } else if (type === "post") {
            return classes.postIcon
        } else if (type === "like") {
            return classes.likeIcon
        } else {
            return classes.followIcon
        }
    }

    notificationUrl(type, item) {
        if (type === "comment") {
            return "post/" + item.target_id
        } else if (type === "post") {
            return "post/" + item.target_id
        } else if (type === "like") {
            return "profile/" + item.from_user_username
        } else {
            return "profile/" + item.from_user_username
        }
    }


    render() {
        const {classes} = this.props;
        var loggedInParts1, loggedInParts2, loggedInParts3;
        if (localStorage.getItem("access-token")) {
            loggedInParts1 = (
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
                </div>)
            loggedInParts2 = (
                <div className={classes.grow}/>)
            loggedInParts3 = (
                <div className={classes.iconContainer}>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {popupState => (
                            <div>
                                <div className={classes.newPostButton}>
                                    <TransitionsModal content="newpost" buttonName="new post" variant="contained"
                                                      refreshToken={this.props.refreshToken}/>
                                </div>
                                <Button style={{margin: '5px'}} className={classes.newPostButton} onClick={() => {
                                    window.location.href = "/channel-create"
                                }} variant='contained'>
                                    New Channel
                                </Button>
                                <div onClick={this.clickNotif} className="d-inline">
                                    <IconButton aria-label="show new notifications" color="inherit"
                                                className={classes.icon} {...bindTrigger(popupState)}
                                    >
                                        <Badge badgeContent={this.state.badgeContent} color="secondary" id="notifBadge">
                                            <NotificationsIcon/>
                                        </Badge>
                                    </IconButton>
                                </div>
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


                                    {this.state.notifications.map(item => (
                                        <Box p={2} className={classes.notifBox} onClick={() => {
                                            window.location.href = this.notificationUrl(item.type, item)
                                        }}>
                                            <PeopleIcon
                                                className={classes.notifIcon + " " + this.notificationType(item.type, classes)}/>
                                            {item.message}
                                        </Box>
                                    ))}

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

                    <Button className={classes.logoutButton} onClick={() => {
                        window.location.href = "/login"
                    }}>
                        Logout
                    </Button>

                </div>)
        }
        return (
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.title} variant="h6" noWrap href="/">
                            <a href="/" className={classes.link}>MarWeb</a>
                        </Typography>
                        {loggedInParts1}
                        {loggedInParts2}
                        {loggedInParts3}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
