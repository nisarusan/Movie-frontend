import './SearchBar.css';
import SearchBarIcon from '../../assets/SearchBarIcon.svg?react'
import AvatarImage from '../../assets/avatar.svg?react'

function SearchBar() {
    return (
        <>
            <div className="search-bar">
                <div className="search-bar--input">
                    <SearchBarIcon/>
                    <input type="text" placeholder="Search for any movies and tv shows"/>
                </div>
                {/*<div className="search-bar-avatar">*/}
                {/*    <AvatarImage/>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default SearchBar;