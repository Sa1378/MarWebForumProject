import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../static/images/avatar/download.jpeg'


class ImageAvatar extends Component {

    root = {
        display: 'flex',
    };
    large = {
        width: '150px',
        height: '150px',
    };
    small = {
        width: '50px',
        height: '50px',
    };

    formatAvatar() {
        if (this.props.avatar_src === null)
            return <Avatar style={this.smallOrLarge()}/>;
        else {
            return <Avatar src={img} style={this.smallOrLarge()}/>
        }
    }
    smallOrLarge(){
        console.log(this.props);
        if (this.props.isList === 'true'){
            return this.small;
        }else return this.large;
    }

    render() {

        return (
            <div className={" d-flex justify-content-center"} style={this.root}>
                {this.formatAvatar()}
            </div>
        );
    }

}

export default ImageAvatar


