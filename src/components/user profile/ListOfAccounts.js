import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AccountCard from "./AccountCard";
import Divider from "@material-ui/core/Divider";

class ListOfAccounts extends Component {
    gridList = {
        width: 300,
        height: 460,
    };
    icon = {
        color: 'rgba(255, 255, 255, 0.54)',
    };

    listOfAccount = () => {
            return (
                <div className='d-flex flex-column m-0 p-0'>
                    {this.props.listOfAccount.map(item => (
                        <React.Fragment>
                            <AccountCard user={item} isList='true'/>
                            <Divider className='a_account' variant="inset" component="li"/>
                        </React.Fragment>
                    ))}
                </div>
            )
    };

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <div style={{backgroundColor : 'white' ,borderRadius : '10px'}}>
                        <GridList style={this.gridList}>
                            <div className='d-flex ml-3'>
                                <div className="d-flex align-content-end m-5 a_account" style={{width : '100%'}}>
                                    {this.listOfAccount()}
                                </div>
                            </div>
                        </GridList>
                </div>
            </React.Fragment>
        );
    }
}

export default ListOfAccounts
