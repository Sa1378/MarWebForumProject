import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";
import PostList from "./post/PostList";
import ChannelsList from "./channel/ChannelsList";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    outline:{
        "&:focus": {
            outline: "none",
        }
    }
}));

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label={props.name1} {...a11yProps(0)} className={classes.outline}/>
                    <Tab label={props.name2} {...a11yProps(1)} className={classes.outline}/>
                    <Tab label={props.name3} {...a11yProps(2)} className={classes.outline}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {loginOrProfileFirstTab(props)}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {loginOrProfileSecondTab(props)}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {loginOrProfileThirdTab(props)}
            </TabPanel>
        </div>
    );

    function loginOrProfileFirstTab(props) {
        if (props.page === 'profile')
            return post(props);
        else return signIn()
    }

    function loginOrProfileSecondTab(props) {
        if (props.page === 'profile')
            return channel(props);
        else return signUp()
    }

    function loginOrProfileThirdTab(props) {
        if (props.page === 'profile')
            return info(props);
        else return ;
    }

    function info(props){
        return <h1>salam</h1>
    }


    function post(props) {
        return <PostList onDisLike={props.onDisLike}
                         onLike={props.onLike}
                         postListStyle={props.postListStyle}
                         postCards={props.postCards}/>
    }

    function channel(props) {
        return <ChannelsList channels={props.channels}/>
    }

    function signIn() {
        return <SignIn/>
    }

    function signUp() {
        return <SignUp/>
    }


}
