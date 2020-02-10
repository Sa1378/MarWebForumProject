import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import img3 from '../../static/images/avatar/download.jpeg'
import img4 from "../../static/images/avatar/photo_2020-01-02_22-01-43.jpg";
import img5 from "../../static/images/avatar/photo_2020-01-02_22-01-52.jpg";
import img6 from "../../static/images/avatar/photo_2020-01-02_22-01-58.jpg";
import img7 from "../../static/images/avatar/photo_2020-01-02_22-02-02.jpg";
import img8 from "../../static/images/avatar/photo_2020-01-02_22-02-06.jpg";
import img9 from "../../static/images/avatar/photo_2020-01-02_22-02-11.jpg";
import img10 from "../../static/images/avatar/photo_2020-01-02_22-02-15.jpg";
import img11 from "../../static/images/avatar/photo_2020-01-02_22-02-19.jpg";
import img from "../../static/images/cards/wallpaper4.jpg";
import { CodeSharp } from '@material-ui/icons';

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
            return <Avatar src={this.randomAvatarImage()} style={this.smallOrLarge()}/>
        }
    }
    smallOrLarge(){
        //console.log(this.props);
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

    randomAvatarImage() {
        //console.log("AVAAATTTTAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRR")
        //console.log(this.props.avatarSrc)
        let number = (Math.floor(Math.random() * 9)) + 3;
   /*     if (number === 3) {
            return img3
        } else if (number === 4) {
            return img4
        } else if (number === 5) {
            return img5
        } else if (number === 6) {
            return img6
        } else if (number === 7) {
            return img7
        } else if (number === 8) {
            return img8
        } else if (number === 9) {
            return img9
        } else if (number === 10) {
            return img10
        } else if (number === 11) {
            return img11
        } else return img*/
        return this.props.avatarSrc;
    }

}

export default ImageAvatar


