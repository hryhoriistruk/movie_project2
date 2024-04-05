import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";
import {GenreIdPage} from "./pages/GenreIdPage";
import {SearchKeyWordPage} from "./pages/SearchKeyWordPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:id', element: <MovieInfoPage/>},
            {path: 'movies/searchWord', element:<SearchKeyWordPage/>},
            {path: 'genres/:idGenres', element:<GenreIdPage/>}
        ]
    }
])

export {router}