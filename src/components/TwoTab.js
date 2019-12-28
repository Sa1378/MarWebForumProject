import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SingIn from "./login/SingIn";
import SignUp from "./login/SignUp";

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
                    <Tab label={props.name1} {...a11yProps(0)} />
                    <Tab label={props.name2} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {loginOrProfileFirstTab(props)}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {loginOrProfileSecondTab(props)}
            </TabPanel>
        </div>
    );

    function loginOrProfileFirstTab(props) {
        if (props.page === 'profile')
            return post();
        else return singIn()
    }

    function loginOrProfileSecondTab(props) {
        if (props.page === 'profile')
            return channel();
        else return signUp()
    }


    function post() {
        return 'Post'
    }

    function channel() {
        return 'Channel'
    }

    function singIn() {
        return <SingIn/>
    }

    function signUp() {
        return <SignUp/>
    }


}
