import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';


class CreateChannel extends Component {

    constructor(props){
        super(props)
        this.createChannel=this.createChannel.bind(this);
    }

    state={
        users:[],
        authors:[],
        channelSuccess:false,
        channelFail:false,
    }

    createChannel(){
        var currentComponent=this;
        var userId=localStorage.getItem("userId");
        var flg=false;
        for(let i=0;i<currentComponent.state.authors.length;i++){
            var author=currentComponent.state.authors[i];
            if(author.id==userId)
                flg=true;
        }
        if(!flg){
            var tmp=currentComponent.state.authors;
            tmp.push({username:localStorage.getItem("username"),id:userId})
            currentComponent.setState({authors:tmp})
        }
        var authorIds=currentComponent.state.authors.map(author=>{return parseInt(author.id)});
        const formData = new FormData();
        formData.append('creator', userId)
        formData.append('title', document.getElementById("title").value)
        formData.append('subject', document.getElementById("subject").value)
        formData.append('image', ((document.getElementById("image").files[0]=="")?null:document.getElementById("image").files[0]))
        for(let i=0;i<authorIds.length;i++){
            formData.append('authors',authorIds[i])
        }
        formData.append('description', document.getElementById("description").value)
        console.log(formData.get("title"))
        console.log(document.getElementById("title").value)
        //console.log(data);
        //console.log(JSON.stringify(data))
        fetch('http://localhost:8000/channel/channel/create', {
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
            currentComponent.setState({channelSuccess:true})
            window.location.href = "/channel/"+data.detail.id;
        })
        .catch(function (err) {
            console.log(err);
            currentComponent.setState({channelFail:true})
        })
        console.log(userId)
        console.log(typeof userId)
        console.log(this.state.authors.map(author=>author.id))
        
    }

    componentWillMount(){
        var currentComponent=this;
        fetch('http://localhost:8000/account/users',{
                method:"GET",
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
            console.log("INFOOOOOOOOOOOOOOOOO")
            console.log(data)
            currentComponent.setState({users:data.users.map(user=>{return{username:user.username,id:user.id}})});
        })
        .catch(function(err){
            console.log(err);
        })
    }

    render() {
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            this.setState({channelSuccess:false,channelFail:false})
        }
        return (
            <div style={{backgroundColor: 'white'}} className="p-5">
                <Snackbar open={this.state.channelSuccess} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Your channel was created successfully!
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.channelFail} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        Your fields are invalid!
                    </Alert>
                </Snackbar>
                <form noValidate autoComplete="off">
                    <div>
                        <Avatar className="" style={{left: '0'}} alt="Alireza" src=""/>
                    </div>
                    <div className="d-flex justify-content-center p-3">
                        <TextField className="m-2"
                                   id="title"
                                   label="Channel Title"
                                   placeholder="Title"
                                   variant="outlined"
                        />
                        <TextField className="m-2"
                                   id="subject"
                                   label="Channel Subject"
                                   placeholder="Subject"
                                   variant="outlined"
                        />
                        
                        <Button className='m-2'
                                    variant="contained"
                                    component="label"
                                >
                                    Channel Image
                                    <input
                                        type="file"
                                        id='image'
                                        style={{ display: "none" }}
                                    />
                        </Button>
                    </div>
                    <div style={{marginLeft:"23px"}}>
                        <Autocomplete
                            multiple
                            onChange={(event, value) => {
                                this.setState({authors:value})
                            }}
                            id="authors"
                            options={this.state.users}
                            getOptionLabel={option => option.username}
                            defaultValue={[]}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                <Chip label={option.username} {...getTagProps({ index })} disabled={index === 0} />
                                ))
                            }
                            style={{ width: 500 }}
                            renderInput={params => (
                                <TextField
                                {...params}
                                label="Authors"
                                variant="outlined"
                                placeholder="Authors"
                                fullWidth
                                />
                            )}
                        />
                    </div>
                    <div className="d-flex justify-content-center p-3">
                        <TextField className="m-2 w-100"
                                   id="description"
                                   label="Channel Description"
                                   placeholder="Description"
                                   multiline
                                   variant="outlined"
                        />
                    </div>
                    <div className="w-100">
                        <Button className="w-100 " variant='contained' color='primary' onClick={this.createChannel}>Create</Button>
                    </div>
                </form>
            </div>
        )
    }


}

export default CreateChannel;