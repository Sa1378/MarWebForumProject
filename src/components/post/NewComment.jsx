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
    insert() {
        let myThis = this;
        console.log("NEW COMMENT" + this.props.postPage);
        fetch("http://localhost:8000/post/insert-comment/" + myThis.replyTo(), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Origin": "*",
                'Authorization': 'Bearer ' + localStorage.getItem("access-token")
            }
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
                                   id="outlined-textarea"
                                   label="Your Comment"
                                   placeholder="Comment"
                                   variant="filled"
                                   multiline
                                   defaultValue={this.checkComment()}
                        />
                        <div className="d-flex justify-content-center w-100">
                            <Button className="m-2 w-100" type='submit' color='primary' variant='contained'
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
        if (this.props.comment) {
            return this.props.comment.body;
        }
        return ''
    }

    replyTo() {
        if (this.props.comment) {
            return "http://localhost:8000/post/insert-comment/" + this.postPage + "/" + this.props.comment.target_id
        }
        return "http://localhost:8000/post/insert-comment/" + this.postPage
    }


}

export default withStyles(styles)(NewComment);