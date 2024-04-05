import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux/slices";

const CheckboxListSecondary=()=> {
    const [checked, setChecked] = useState([]);
    const {genres} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        dispatch(moviesActions.setSearchGenres({searchGenres: newChecked}))
        setChecked(newChecked);
    };

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {genres.map(genre => {
                const labelId = `checkbox-list-secondary-label-${genre.id}`;
                return (
                    <ListItem
                        key={genre.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(genre.id)}
                                checked={checked.indexOf(genre.id) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}/>
                        }
                        disablePadding>
                        <ListItemButton>
                            <ListItemText id={labelId} primary={`${genre.name}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export {CheckboxListSecondary}