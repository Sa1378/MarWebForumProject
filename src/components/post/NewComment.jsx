import React, {Component} from "react";
import {Container, withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const styles = theme => (
    {
        link: {
            color: "gray",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "none",
                color: "black",
            },
            "&:focus": {
                outline: "none",
            }
        }
    }
);


class NewComment extends Component {

    constructor(props) {
        super(props);
        this.insert = this.insert.bind(this);

    }

    insert() {
        const data = new FormData();
        let myThis = this;
        console.log(document.getElementById("body").value);

        data.append('body', document.getElementById("body").value);
        data.append('post_related', parseInt(this.props.postPage));
        // console.log(this.postPage)
        if (this.props.comment)
            data.append('comment_id', this.props.comment.target_id);
        data.append('media', ((document.getElementById("media").files[0] == "") ? null : document
            .getElementById("media").files[0]));
        fetch(myThis.replyTo(), {
            method: myThis.typeOfRequest(),
            headers: {
                // "Content-Type": "multipart/form-data",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            },
            body: data,
        }).then(function (response) {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Server Error!");
        }).then(function (data) {
            console.log(data);
            myThis.setState({post: data.post});
            myThis.setState({comments: data.post.comments})
        }).catch(function (error) {
            console.log(error)
        })
    }

    render() {
        return (
            <Container maxWidth={"md"} className="mt-3">
                <Paper>
                    <form>
                        <TextField className="w-100"
                                   id="body"
                                   label="Your Comment"
                                   placeholder="Comment"
                                   variant="filled"
                                   multiline
                                   defaultValue={this.checkComment()}
                        />
                        <div className="m-3 form-group d-flex justify-content-center">
                            <Button className='mx-1'
                                    variant="contained"
                                    component="label"
                            >
                                Image
                                <input
                                    type="file"
                                    id='media'
                                    style={{display: "none"}}
                                />
                            </Button>
                        </div>
                        <div className="d-flex justify-content-center w-100">
                            <Button className="m-2 w-100" color='primary' variant='contained'
                                    onClick={this.insert}>
                                Insert
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Container>
        );
    }

    checkComment() {
        if (this.props.isEdit)
            return '';
        if (this.props.comment) {
            return this.props.comment.body;
        }
        return ''
    }

    replyTo() {
        return "http://localhost:8000/post/insert-comment"
    }

    typeOfRequest() {
        if (this.props.isEdit) {
            return "PUT"
        }
        return "POST"
    }


}

export default withStyles(styles)(NewComment);