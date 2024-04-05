import {axiosService} from "./axiosService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IData, IOneMove, ITrailers} from "../interfaces";

const moviesService = {
    getAll: (page:string): IRes<IData> => axiosService.get(urls.movies, {params:{page}}),
    getById: (id:string):IRes<IOneMove> => axiosService.get(urls.movie(id)),
    getTrailer: (id:string):IRes<ITrailers> => axiosService.get(urls.trailer(id))
}

export {moviesService}