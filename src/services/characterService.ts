import {axiosService} from "./axiosService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IChar} from "../interfaces";

const characterService = {
    getById: (id: string): IRes<IChar> => axiosService.get(urls.characters(id))
}

export {characterService}