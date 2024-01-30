import './SearchBar.css';
import SearchBarIcon from '../../assets/SearchBarIcon.svg?react'

function SearchBar() {
    return (
        <>
            <div className="search-bar">
                <SearchBarIcon/>
                <div className="login">
                    <input type="text" placeholder="Search for any movies and tv shows"/>
                </div>
            </div>
        </>
    );
}

export default SearchBar;