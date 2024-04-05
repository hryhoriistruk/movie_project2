import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movies} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux/slices";

const SearchKeyWordPage = () => {
    const {page, movies, searchWord} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page, query:searchWord})
    }, [page, searchWord]);

    useEffect(() => {
        page && dispatch(moviesActions.getMoviesByKeyWord({page, query: searchWord}))
    }, [page, dispatch, searchWord]);

    return (
        <div>
            <Movies movies={movies}/>
        </div>
    );
};

export {SearchKeyWordPage};
