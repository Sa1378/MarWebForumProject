import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import {Link} from 'react-router-dom';
import TransitionsModal from "../TransitionsModal";

const styles={
    container:{
        margin:"15px 0px 0px 60px",
        display:"flex",
        flexFlow:"column",
        width:"20%",
        minWidth:"200px",
    },
    item:{
        marginBottom:"20px",
        width:"100%",
        padding:"10px",
    },
    rankBadge:{
        margin:"0px 15px 0px 5px",
    },
    link:{
        textDecoration:"none",
        color:"black",
        "&:hover":{
            textDecoration:"none",
        }
    },
    rankItem:{
        margin:"10px 0px",
    },
    firstItem:{
        marginTop:"20px",
    },
    small:{
        fontSize:"10px",
        color:"black",
    },
    medium:{
        fontSize:"12px",
        marginLeft:"5px",
        display:"block",
        color:"black",
        "&:hover":{
            textDecoration:"none",
        }
    },
    firstSmall:{
        marginTop:"10px",
    },
    firstMedium:{
        marginTop:"5px",
    },
    sticky:{
        position: "sticky",
        top: "70px",
    }

};

class Sidebar extends Component{
    render(){
        const {classes}=this.props;
        return (
            <div className={classes.container}>
                <TransitionsModal content="newpost" buttonName="new post" variant="contained"/>
                <Paper className={classes.item+" "+classes.firstItem}>
                    Top Users:
                    <div className={classes.rankItem}> <Badge badgeContent={1} color="primary" className={classes.rankBadge}/>
                        <Link to="/profile/rezaaminimajd" className={classes.link}>Reza</Link>
                    </div>
                    <div className={classes.rankItem}> <Badge badgeContent={2} color="primary" className={classes.rankBadge}/>
                        <Link to="/profile/shalireza" className={classes.link}>Alireza</Link>
                    </div>
                    <div className={classes.rankItem}> <Badge badgeContent={3} color="primary" className={classes.rankBadge}/>
                        <Link to="/profile/merhdads" className={classes.link}>Mehrdad</Link>
                    </div>
                    <div className={classes.rankItem}> <Badge badgeContent={4} color="primary" className={classes.rankBadge}/>
                        <Link to="/profile/pashmak_haj_abdollah" className={classes.link}>Pashmak</Link>
                    </div>
                </Paper>
                <Paper className={classes.item}>
                    Top Channels:
                    <div className={classes.rankItem}> <Badge badgeContent={1} color="primary" className={classes.rankBadge}/>
                        <Link to="/channel/parsnews" className={classes.link}>Pars News</Link>
                    </div>
                    <div className={classes.rankItem}> <Badge badgeContent={2} color="primary" className={classes.rankBadge}/>
                        <Link to="/channel/shantajgar" className={classes.link}>Shantaj Gar</Link>
                    </div>
                    <div className={classes.rankItem}> <Badge badgeContent={3} color="primary" className={classes.rankBadge}/>
                        <Link to="/channel/memes" className={classes.link}>Memes</Link>
                    </div>
                    <div className={classes.rankItem}> <Badge badgeContent={4} color="primary" className={classes.rankBadge}/>
                        <Link to="/channel/webproject" className={classes.link}>Web Project</Link>
                    </div>
                </Paper>
                <Paper className={classes.item}>
                    Marweb
                    <a href="/" className={classes.medium+" "+classes.firstMedium}>About</a>
                    <a href="/" className={classes.medium}>Careers</a>
                    <a href="/" className={classes.medium}>Help</a>
                    <div className={classes.small+" "+classes.firstSmall}>
                        <a href="/">Terms</a>|<a href="/">Content Policy</a>|<a href="/">Privacy Policy</a>|<a href="/">Mod Policy</a>
                    </div>
                    <div className={classes.small}>Marweb Inc © 2020. All rights reserved</div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);