import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const {onSearch} = props
    return (
        <div>
            <SearchBar onSearch = {onSearch}/>
            <Link to="/home">
                <button>Home</button>
            </Link>

            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/favorite">
                <button>Favorites</button>
            </Link>

        </div>
    )
};

export default Nav;
