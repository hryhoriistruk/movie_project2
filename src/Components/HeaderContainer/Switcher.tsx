import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks";
import {themeAction} from "../../redux/slices";

const Switcher = () => {
    const localSwitch = JSON.parse(localStorage.getItem('switch')) || false
    const [checked, setChecked] = useState(localSwitch);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(themeAction.setTheme(localSwitch))
    }, [checked]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        localStorage.setItem('switch', JSON.stringify(event.target.checked))
    };

    return (
        <FormControlLabel
            control={<Switch
                checked={checked}
                onChange={handleChange}
                color="warning"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="Mode"
            labelPlacement="top"
        />
    );
};

export {Switcher};