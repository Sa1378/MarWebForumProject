import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";


class Follow extends Component {

    constructor(props){
        super(props);
        this.follow=this.follow.bind(this);
        this.unfollow=this.unfollow.bind(this);
    }

    follow(){
        var currentComponent=this;
        fetch('http://localhost:8000/account/follow/'+this.props.username,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log(data)
            currentComponent.props.changeStatus();
        })
        .catch(function(err){
            console.log(err);

          //  window.location.href="/notfound";
        })
    }

    unfollow(){
        var currentComponent=this;
        fetch('http://localhost:8000/account/follow/'+this.props.username,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json", 
                    "Access-Control-Origin": "*",
                    'Authorization': 'Bearer ' + localStorage.getItem("access-token")
        }})
        .then(function(response) {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            throw new Error("Server Error!");
        })
        .then(function(data) {
            console.log(data)
            currentComponent.props.changeStatus();
        })
        .catch(function(err){
            console.log(err);

          //  window.location.href="/notfound";
        })
    }

    render() {
        return (
            <div className='d-flex justify-content-center pb-4'>
                {this.format()}
            </div>
        );
    }

    format() {
        if (this.props.username === this.props.my_name) {
            return;
        } else {
            if (this.props.followed === false) {
                return <Button onClick={this.follow} className="d-flex flex-column-reverse" variant="contained"
                               color="primary">Follow</Button>
            } else return <Button onClick={this.unfollow} className="d-flex flex-column-reverse" variant="contained"
                                  color="secondary">Unfollow</Button>
        }
    }

}

export default Follow


