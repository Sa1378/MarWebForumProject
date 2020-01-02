import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import MultipleSelect from "../post/MultiSelect";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";


class CreateChannel extends Component {


    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <form noValidate autoComplete="off">
                    <div>
                        <Avatar className="" style={{left: '0'}} alt="Alireza" src=""/>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                        <TextField className="m-2"
                                   id="outlined-textarea"
                                   label="Channel Title"
                                   placeholder="Title"
                                   variant="outlined"
                        />
                        <TextField className="m-2"
                                   id="outlined-textarea"
                                   label="Channel Subject"
                                   placeholder="Subject"
                                   variant="outlined"
                        />
                        <input accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file"/>
                        <label htmlFor="icon-button-file">
                            <IconButton size='large' color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera/>
                            </IconButton>
                        </label>
                    </div>
                    <div>
                        <MultipleSelect options={this.props.accounts}/>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                        <TextField className="m-2 w-100"
                                   id="outlined-textarea"
                                   label="Channel Description"
                                   placeholder="Description"
                                   multiline
                                   variant="outlined"
                        />
                    </div>
                    <div className="w-100">
                        <Button className="w-100 " variant='contained' color='primary' type='submit'>Create</Button>
                    </div>
                </form>
            </div>
        )
    }


}

export default CreateChannel;