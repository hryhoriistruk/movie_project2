import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import {urls} from "../../../constants";
import {GenresInMovieInfo} from "../../GenresContainer";
import {CharactersInMovieInfo} from "../../CharactersContainer";
import {useAppSelector} from "../../../hooks";
import css from './MovieInfo.module.css'

const MovieInfo = () => {
    const {theme} = useAppSelector(state => state.theme)
    const {movieById, characters, trailers} = useAppSelector(state => state.movies)
    const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = movieById
    const teaser = trailers.filter(item => item.type === 'Teaser' || item.type === 'Trailer')

    return (
        <div className={`${theme ? css.dark : css.light} ${css.all}`}>
            <div className={css.info}>
                <div>
                    <img
                        src={`${poster_path ? urls.poster(poster_path) : 'https://w7.pngwing.com/pngs/130/516/png-transparent-brown-hair-anime-blond-amagi-brilliant-park-fiction-anime-cg-artwork-black-hair-hand-thumbnail.png'}`}
                        alt={original_title}/>
                </div>
                <div className={css.movieInfo}>
                    <h3>{original_title}</h3>
                    <div className={css.genresBox}>
                        <h4>Genres:</h4>
                        <div className={css.genresBoxParagraf}>
                            {genres.map(item => <GenresInMovieInfo key={item.id} item={item}/>)}
                        </div>
                    </div>
                    <div className={css.rating}>
                        <h4>Rating: {Math.round(vote_average * 10) / 10}</h4>
                        <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="large"
                                emptyIcon={<StarIcon style={{opacity: 1, color: 'gray'}} fontSize="inherit"/>}
                                readOnly/>
                    </div>
                    <p>{overview}</p>
                    <p>Release date: {release_date}</p>
                    <p>Runtime: {runtime} min</p>
                </div>
            </div>
            <div className={css.trailer}>
                <h4>Teaser:</h4>
                <iframe width="1400" height="790"
                        src={`https://www.youtube.com/embed/${teaser.length ? teaser[0].key : "dQw4w9WgXcQ"}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            <div>
                <h4>Main Cast:</h4>
                <div className={css.charactersBox}>
                    {characters.map(item => <CharactersInMovieInfo key={item.id} item={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};