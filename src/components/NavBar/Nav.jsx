import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

export default function Nav(props) {
    const {onSearch} = props
    return (
        <nav className={style.navBar}>
            <Link to="/home"><button className={style.btn}>Home</button></Link>
            <Link to="/about"><button className={style.btn}>About</button></Link>
            <Link to="/favorite"><button className={style.btn}>Favorites</button></Link>
            <SearchBar onSearch = {onSearch}/>
        </nav>
    )
};
