import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';


class ChannelEdit extends Component {

    constructor(props){
        super(props)
        this.createChannel=this.createChannel.bind(this);
        this.state={users:[],authors:this.props.authors.map(author=>{return {username:author.username,id:author.id}})}
        console.log("EDDIIIIIIIIITTTTT CHAAAANNNNNNEEEEEELLLLL")
        console.log(this.props.authors.map(author=>{return {username:author.username,id:author.id}}))
    }

    state={
        users:[],
        authors:[]
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
            window.location.href = "/channel/"+data.detail.id;
        })
        .catch(function (err) {
            console.log(err);
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
        console.log(this.state.users);
        console.log("|||||||")
        console.log(this.state.authors);
        return (
            <div style={{backgroundColor: 'white'}} className="p-5">
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
                                for(let i=0;i<value.length;i++)
                                {
                                    for(let j=i+1;j<value.length;j++)
                                    {
                                        if(value[i].username==value[j].username && value[i].id==value[j].id){
                                            value.splice(j,1);
                                            value.splice(i,1);
                                            i--;
                                            break;
                                        }
                                    }
                                }
                                console.log(value)
                                this.setState({authors:value})
                            }}
                            id="authors"
                            options={this.state.users}
                            getOptionLabel={option => option.username}
                            defaultValue={this.props.authors.map(author=>{return {username:author.username,id:author.id}})}
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
                        <Button className="w-100 " variant='contained' color='primary' onClick={this.createChannel}>Edit</Button>
                    </div>
                </form>
            </div>
        )
    }


}

export default ChannelEdit;