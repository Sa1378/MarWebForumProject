import React,{Component} from "react";
import "../static/css/Header.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/core/styles";


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