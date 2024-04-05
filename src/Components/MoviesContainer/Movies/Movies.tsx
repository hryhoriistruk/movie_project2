import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import {useAppSelector} from "../../../hooks";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    movies: IMovie[]
}

const Movies: FC<IProps> = ({movies}) => {
    const {theme} = useAppSelector(state => state.theme)

    return (
            <div className={`${theme ? css.dark : css.light} ${css.allMovies}`}>
                {movies.map(item => <Movie key={item.id} item={item}/>)}
            </div>
    );
};

export {Movies};