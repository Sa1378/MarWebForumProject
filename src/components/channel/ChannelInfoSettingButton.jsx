import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from "@material-ui/core/IconButton";
import TransitionsModal from "../TransitionsModal";
import InfoIcon from '@material-ui/icons/Info';


export default function ChannelInfoSettingButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const infoOrSetting = () => {
        console.log(props.canEdit);
        if (!props.canEdit) {
            return (
                <InfoIcon color={"primary"}/>
            )
        } else {
            return (
                <SettingsIcon color={"primary"}/>
            )
        }
    }

    return (
        <div>
            <IconButton className={props.linkClass} aria-controls="settings" aria-haspopup="true" onClick={handleClick}>
                {infoOrSetting()}
            </IconButton>
            <Menu
                id="setting-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <TransitionsModal accounts={props.editAuthors} info={props.info} onClose={handleClose} buttonName="edit channel"/>
                <TransitionsModal accounts={props.followers} onClose={handleClose} buttonName="subscribers"/>
                {/*<MenuItem onClick={handleClose}>Subscribers</MenuItem>*/}
                <TransitionsModal accounts={props.authors} onClose={handleClose} buttonName="authors"/>
                <TransitionsModal info={props.info} onClose={handleClose} buttonName="delete channel"/>
            </Menu>
        </div>
    );
}
