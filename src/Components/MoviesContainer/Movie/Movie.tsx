import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import {IMovie} from "../../../interfaces";
import {urls} from "../../../constants";
import css from './Movie.module.css'

interface IProps extends PropsWithChildren {
    item: IMovie
}

const Movie: FC<IProps> = ({item}) => {
    const {id, original_title, poster_path, vote_average} = item;
    const navigate = useNavigate()

    return (
        <div className={css.movie}>
            <img onClick={() => navigate(`/movies/${id}`)}
                 src={poster_path ? `${urls.poster(poster_path)}` : 'https://w7.pngwing.com/pngs/130/516/png-transparent-brown-hair-anime-blond-amagi-brilliant-park-fiction-anime-cg-artwork-black-hair-hand-thumbnail.png'}
                 alt={original_title}/>
            <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="medium"
                    emptyIcon={<StarIcon style={{opacity: 1, color: 'gray'}} fontSize="inherit"/>}
                    readOnly/>
            <h3>{original_title}</h3>
        </div>
    );
};

export {Movie};