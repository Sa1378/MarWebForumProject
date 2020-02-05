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
            return this.props.comment;
        }
        return ''
    }


}

export default withStyles(styles)(NewComment);