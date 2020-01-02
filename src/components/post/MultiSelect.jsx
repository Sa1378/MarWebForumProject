import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect(props) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = event => {
        setPersonName(event.target.value);
    };

    return (
        <div>
            <FormControl className="w-100 p-2">
                <InputLabel id="demo-mutiple-chip-label">Authors</InputLabel>
                <Select className=""
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        variant='filled'
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip"/>}
                        renderValue={selected => (
                            <div className="d-flex flex-wrap">
                                {selected.map(value => (
                                    <Chip key={value} label={value}/>
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                >
                    {props.options.map(option => (
                        <MenuItem key={option} value={option} style={getStyles(option, personName, theme)}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
