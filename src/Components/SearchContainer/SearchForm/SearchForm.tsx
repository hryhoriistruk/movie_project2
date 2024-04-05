import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IKeyWord} from "../../../interfaces";
import css from './SearchForm.module.css'
import {moviesActions} from "../../../redux/slices";
import {useAppDispatch} from "../../../hooks";

const SearchForm = () => {
    const {reset, handleSubmit, register} = useForm()
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const search = (keyWord: IKeyWord) => {
        const searchWord =  keyWord.Keyword
        dispatch(moviesActions.setSearchWord({searchWord}))
        navigate(`movies/searchWord`)
        reset()
        dispatch(moviesActions.setPage({page:'1'}))
    };

    return (
        <form className={css.myForm} onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'Search by keyword'} {...register('Keyword')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};