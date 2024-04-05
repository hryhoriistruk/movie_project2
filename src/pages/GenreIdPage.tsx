import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {Movies} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux/slices";

const GenreIdPage = () => {
    const {idGenres} = useParams<string>()
    const {page, movies} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const [, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page})
    }, [idGenres]);

    useEffect(() => {
        page && dispatch(moviesActions.getMoviesByGenre({page, with_genres: idGenres}))
    }, [page, idGenres, dispatch]);

    return (
        <div>
            <Movies movies={movies}/>
        </div>
    );
};

export {GenreIdPage};