import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDQ4Njk2ZDY0ZTQ1ZjI2MmUxMzI3MDFmMTllMmIzNSIsInN1YiI6IjY1NDYwZmI2ZDhjYzRhMDBhZDIyZjE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3kPitf82kmxP0Op5Rncgcr_31qgrItr0IzGZze3-2aw`
    return request
})

export {axiosService}