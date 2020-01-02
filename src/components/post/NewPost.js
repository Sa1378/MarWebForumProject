import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import img from '../../static/images/avatar/download.jpeg'
import Button from "@material-ui/core/Button";
import ControlledOpenSelect from "./PlaceOFPost";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class NewPost extends Component {
    state = {
        value: '0',
        channels: [
            {
                name: 'channel 1',
            },
            {
                name: 'channel 2',
            },
        ],
    };

    changePlace = e => {
        console.log("after set state");
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <CssBaseline/>
                <Container minWidth="lg">
                    <Typography component="div" style={{backgroundColor: 'white', width: '1000px'}}
                                className="border rounded">
                        <form className="jumbotron d-flex flex-column justify-content-center">
                            <div className="form-group d-flex justify-content-center my-3">
                                <TextField id="filled-basic" label="Title" variant="filled"/>
                            </div>
                            <div className="form-group d-flex justify-content-center my-3">
                                <TextField style={{width: '100%'}} id="filled-basic" label="Content" variant="filled"
                                           multiline={true}/>

                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <Button className='mx-1'
                                        variant="contained"
                                        component="label"
                                >
                                    Post Image
                                    <input
                                        type="file"
                                        id={'image'}
                                        style={{display: "none"}}
                                    />
                                </Button>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <InputLabel id="label">Post Place</InputLabel>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Select labelId="label" id="select" value={this.state.value}>
                                    <MenuItem value="0">My Post</MenuItem>
                                    {this.state.channels.map(item => (
                                        <MenuItem name='value' value={item.name}
                                                  onClick={this.changePlace}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button type="submit" className="btn btn-primary" color="primary"
                                        variant="contained">Create</Button>
                            </div>

                        </form>
                    </Typography>
                </Container>
            </div>
        );
    };

}


export default NewPost;