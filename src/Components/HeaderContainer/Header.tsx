import {NavLink} from "react-router-dom";

import {Switcher} from "./Switcher";
import {useAppSelector} from "../../hooks";
import css from './Header.module.css'
import {SearchForm} from "../SearchContainer";
import {TransitionsModal} from "../ModalContainer/Modal";

const Header = () => {
    const {theme} = useAppSelector(state => state.theme)
    return (
        <div className={`${theme ? css.dark : css.light} ${css.header}`}>
            <div className={css.logo}>The MovieDB</div>
            <div className={css.nav}>
                <NavLink to={'movies'}>Movies</NavLink>
                <TransitionsModal/>
                <SearchForm/>
            </div>
            <div className={css.switchUser}>
                <Switcher/>
                <div className={css.user}>
                    <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="user"/>
                    <h6>User77</h6>
                </div>
            </div>
        </div>
    );
};

export {Header};