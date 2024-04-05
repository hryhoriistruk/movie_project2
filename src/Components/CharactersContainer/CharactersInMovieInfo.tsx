import {FC, PropsWithChildren} from 'react';

import {urls} from "../../constants";
import {ICast} from "../../interfaces";
import css from "./CharectersInMovieInfo.module.css";

interface IProps extends PropsWithChildren {
    item: ICast
}

const CharactersInMovieInfo:FC<IProps> = ({item}) => {

    return (
        <div className={css.character} key={item.id}>
            {
                item.profile_path ?
                    <img src={urls.poster(item.profile_path)} alt={item.character}/>
                    :
                    <img src="https://www.trendzbd.com/web/images/miscellaneous/no_image_found.jpg"
                         alt={item.character}/>
            }
            <div>{item.name}</div>
        </div>
    );
};

export {CharactersInMovieInfo};