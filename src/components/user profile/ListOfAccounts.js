import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ImageAvatar from "./Avatar";
import AccountCard from "./AccountCard";
import Divider from "@material-ui/core/Divider";

class ListOfAccounts extends Component {
    gridList = {
        width: 536,
        height: 660,
    };
    icon = {
        color: 'rgba(255, 255, 255, 0.54)',
    };

    followerOrFollowing = () => {
        console.log(this.props);
        if (this.props.eroring === 'er') {
            return (
                <div className='d-flex flex-column'>
                    {this.props.follower.map(item => (
                        <React.Fragment>
                            <AccountCard user={item} isList='true'/>
                            <Divider variant="inset" component="li"/>
                        </React.Fragment>
                    ))}
                </div>
            )
        } else {
            return (
                <div className='d-flex flex-column'>
                    {this.props.following.map(item => (
                        <React.Fragment>
                            <AccountCard user={item} isList='true'/>
                            <Divider variant="inset" component="li"/>
                        </React.Fragment>
                    ))}
                </div>
            )
        }
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: 'white', height: '70vh'}}>
                        <GridList cellHeight={180} style={this.gridList}>
                            <div className='d-flex ml-3'>
                                <div className="d-flex align-content-end m-5">
                                    {this.followerOrFollowing()}
                                </div>
                            </div>
                        </GridList>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

export default ListOfAccounts
