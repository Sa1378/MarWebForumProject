import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


class CreateChannel extends Component {


    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <form noValidate autoComplete="off">
                    <div className="d-flex justify-content-center p-3">
                        <TextField className="m-2"
                                   id="outlined-textarea"
                                   label="Channel Title"
                                   placeholder="Title"
                            // multiline
                                   variant="outlined"
                        />
                        <TextField className="m-2"
                                   id="outlined-textarea"
                                   label="Channel Title"
                                   placeholder="Title"
                            // multiline
                                   variant="outlined"
                        />
                        <TextField className="m-2"
                                   id="outlined-select-currency"
                                   select
                                   label="Authors"
                                   value={'alireza'}
                                   helperText="Please Select channel authors"
                                   variant="outlined"
                        >
                            {this.props.accounts.map(account => (
                                <MenuItem key={account.id} value={account.username}>
                                    {account.username}
                                </MenuItem>
                            ))}
                        </TextField>
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
                </form>
            </div>
        )
    }


}

export default CreateChannel;