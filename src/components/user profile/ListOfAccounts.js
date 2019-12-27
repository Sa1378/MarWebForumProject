import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.white,
    },
    gridList: {
        width: 536,
        height: 660,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
const ListOfAccounts = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Typography component="div" style={{backgroundColor: 'white', height: '70vh'}}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                        </GridListTile>
                            <p>list of accounts</p>
                    </GridList>
                </Typography>
            </Container>
        </React.Fragment>
    );
};
export default ListOfAccounts
