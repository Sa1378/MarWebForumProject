import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class ListOfAccounts extends Component {
    gridList = {
        width: 536,
        height: 660,
    };
    icon = {
        color: 'rgba(255, 255, 255, 0.54)',
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: 'white', height: '70vh'}}>
                        <GridList cellHeight={180} style={this.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                            </GridListTile>
                            <p>list of accounts</p>
                        </GridList>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

export default ListOfAccounts
