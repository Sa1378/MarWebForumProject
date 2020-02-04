import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.props.refreshToken();
        this.createPost = this.createPost.bind(this);
        //    this.changePlace=this.changePlace.bind(this);
    }

    state = {
        value: "1",
        channels: []
    };

    componentWillMount() {
        let currentComponent = this;
        fetch('http://localhost:8000/channel/channels', {
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
                currentComponent.setState({ channels: data.channels })
            })
            .catch(function (err) {
                //TODO
                console.log(err);
            })

    }



    render() {
        const changePlace = (event) => {
            console.log(event);
            this.setState({ value: event.target.value })
        }
        return (
            <div>
                <CssBaseline />
                <Container>
                    <Typography component="div" style={{ backgroundColor: 'white', width: '1000px' }}
                        className="border rounded">
                        <form className="jumbotron d-flex flex-column justify-content-center">
                            <div className="form-group d-flex justify-content-center my-3">
                                <TextField name="title" id="title" label="Title" variant="filled" defaultValue={this.checkForTitle()} />
                            </div>
                            <div className="form-group d-flex justify-content-center my-3">
                                <TextField style={{ width: '100%' }} id="content" label="Content" variant="filled"
                                    multiline={true} defaultValue={this.checkForContent()} />

                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <Button className='mx-1'
                                    variant="contained"
                                    component="label"
                                >
                                    Post Image
                                    <input
                                        type="file"
                                        id='media'
                                        style={{ display: "none" }}
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
            return this.props.post.content;
        return ''
    }

    buttonName() {
        if (this.props.post)
            return 'Edit';
        return 'Create'
    }

    createPost() {
        var userId;
        var currentComponent = this;
        fetch('http://localhost:8000/account/profile/' + localStorage.getItem("username"), {
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
                console.log(data)
                userId = data.user.id
            })
            .then(function () {
                var data = {
                    title: document.getElementById("title").value,
                    user: userId,
                    channel: parseInt(currentComponent.state.value),
                    body: document.getElementById("content").value,
                }
                const formData = new FormData();
                formData.append('title', document.getElementById("title").value)
                formData.append('user', userId)
                formData.append('channel', parseInt(currentComponent.state.value))
                formData.append('body', document.getElementById("content").value)
                formData.append('media', document.getElementById("media").files[0])
                console.log(formData.get("title"))
                console.log(document.getElementById("title").value)
                //console.log(data);
                //console.log(JSON.stringify(data))
                fetch('http://localhost:8000/post/post-view', {
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("access-token")
                    },
                    body: formData
                })
                    .then(function (response) {
                        console.log(response)
                        if (response.ok) {
                            return response.json();
                        }
                        throw new Error("Server Error!");
                    })
                    .then(function (data) {
                        console.log(data);
                        window.location.href = "/";
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            })
            .catch(function (err) {
                //TODO
                console.log(err);
            })


    }

}


export default NewPost;