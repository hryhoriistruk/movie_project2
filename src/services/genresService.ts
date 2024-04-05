import {axiosService} from "./axiosService";

import {IRes} from "../types";
import {IData, IGenres} from "../interfaces";
import {urls} from "../constants";

const genresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre),
    getMoviesByGenre: (page:string,with_genres:string):IRes<IData> => axiosService.get(urls.movies, {params:{page,with_genres}})
}

export {genresService}