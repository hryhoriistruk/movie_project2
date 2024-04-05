import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import {CheckboxListSecondary} from "./CheckList";
import {moviesActions} from "../../redux/slices";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './Modal.module.css'

const TransitionsModal = () => {
    const {searchGenres, genres} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        dispatch(moviesActions.setPage({page:'1'}))
        {searchGenres && navigate(`genres/${searchGenres}`)}
    };

    return (
        <div>
            <Button onClick={handleOpen} id={css.genres}>Genres</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}>
                <Fade in={open}>
                    <Box className={css.style}>
                        {genres && <CheckboxListSecondary/>}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export {TransitionsModal}