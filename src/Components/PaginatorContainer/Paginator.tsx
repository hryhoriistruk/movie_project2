import {Pagination} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ChangeEvent, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from "./paginator.module.css";
import {moviesActions} from "../../redux/slices";
const Paginator = () => {
    const dispatch = useAppDispatch();
    const {total_pages} = useAppSelector(state => state.movies)
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        setQuery({page})
        dispatch(moviesActions.setPage({page}))
    }, []);

    const handlerPageChange = (event: ChangeEvent<unknown>, page: number): void => {
        setQuery({page: `${page}`})
        dispatch(moviesActions.setPage({page}))
    }

    return (
        <div className={css.paginator}>
            <Pagination page={+page} count={(total_pages > 500) ? 500 : total_pages} variant="outlined" color="standard"
                        shape="rounded" size="large" onChange={handlerPageChange}/>
        </div>
    );
};

export {Paginator};