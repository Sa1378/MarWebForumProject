import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import '../../static/css/material.css'
import {withStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


const styles = theme => ({
    outline: {}
});

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.createPost = this.createPost.bind(this);
        //    this.changePlace=this.changePlace.bind(this);
    }


    state = {
        snackBar: false,
        value: "1",
        channels: []
    };

    componentWillMount() {
        let currentComponent = this;
        fetch('http://localhost:8000/channel/channels/' + localStorage.getItem("username"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
        })
            .then(function (response) {
                console.log(response)
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                console.log(data.channels)
                currentComponent.setState({channels: data.channels})
            })
            .catch(function (err) {
                //TODO
                console.log(err);
            })

    }


    render() {
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }
        }
        const changePlace = (event) => {
            console.log(event);
            this.setState({value: event.target.value})
        }
        const {classes} = this.props;
        return (
            <div className={classes.outline}>
                <Snackbar open={this.state.snackBar} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Your post was created successfully!
                    </Alert>
                </Snackbar>
                <CssBaseline/>
                <Container>
                    <Typography component="div" style={{backgroundColor: 'white', width: '1000px'}}
                                className="border rounded">
                        <form className="jumbotron d-flex flex-column justify-content-center">
                            <div className="form-group d-flex justify-content-center my-3">
                                <TextField name="title" id="title" label="Title" variant="filled"
                                           defaultValue={this.checkForTitle()}/>
                            </div>
                            <div className="form-group d-flex justify-content-center my-3">
                                <TextField style={{width: '100%'}} id="content" label="Content" variant="filled"
                                           multiline={true} defaultValue={this.checkForContent()}/>

                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <Button className='mx-1'
                                        variant="contained"
                                        component="label"
                                >
                                    Post Image
                                    <input
                                        type="file"
                                        id='postmedia'
                                        style={{display: "none"}}
                                    />
                                </Button>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <InputLabel id="label">Post Place</InputLabel>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Select labelId="label" id="select" value={this.state.value} onChange={changePlace}>
                                    {this.state.channels.map(item => (
                                        <MenuItem name='value' key={item.id} value={item.id}
                                                  onClick={changePlace}>{item.title}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button className="btn btn-primary" color="primary"
                                        variant="contained" onClick={this.createPost}>{this.buttonName()}</Button>
                            </div>

                        </form>
                    </Typography>
                </Container>
            </div>
        );
    };

    checkForTitle() {
        if (this.props.post)
            return this.props.post.title;
        return ''
    }

    checkForContent() {
        if (this.props.post)
            return this.props.post.body;
        return ''
    }

    buttonName() {
        if (this.props.post)
            return 'Edit';
        return 'Create'
    }

    method() {
        if (this.props.edit) {
            return 'PUT'
        }
        return 'POST'
    }

    url() {
        if (this.props.edit) {
            return 'http://localhost:8000/post/post-view/edit/' + this.props.post.id
        }
        return 'http://localhost:8000/post/post-view'
    }


    createPost() {
        var currentComponent = this;
        const formData = new FormData();
        formData.append('title', document.getElementById("title").value)
        formData.append('user', parseInt(localStorage.getItem("userId")))
        formData.append('channel', parseInt(currentComponent.state.value))
        formData.append('body', document.getElementById("content").value)
        formData.append('media', document.getElementById("postmedia").files[0])
        let myThis = this;

        fetch(myThis.url(), {
            method: myThis.method(),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            },
            body: formData
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Server Error!");
            })
            .then(function (data) {
                console.log(data);
                currentComponent.setState({snackBar: true});
                if (this.props.edit) {
                    window.location.reload()
                } else {
                    window.location.href = "/";
                }
            })
            .catch(function (err) {
                console.log(err);
            })


    }


}


export default withStyles(styles)(NewPost);