import React, {Component} from "react";
import Button from "@material-ui/core/Button";


class DeletePostAlert extends Component {

    deleteComment() {
        let myThis = this;
        fetch("http://localhost:8000/post/delete-comment/" , {
            method: "GET",
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
        }).catch(function (error) {
            console.log(error)
        })
    }


    render() {
        return (
            <React.Fragment>
                <Button type="submit" color="secondary" variant="contained" className="m-2"
                        onClick={this.deleteComment}> Delete </Button>
                <Button color="primary" variant="contained" className="m-2"> Cancel </Button>
            </React.Fragment>
        );
    }


}

export default DeletePostAlert;