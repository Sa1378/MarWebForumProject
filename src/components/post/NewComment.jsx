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
                        />
                        <Button className="m-2" type='submit' color='primary' variant='contained'>
                            Insert
                        </Button>
                    </form>
                </Paper>
            </Container>
        );
    }


}

export default withStyles(styles)(NewComment);