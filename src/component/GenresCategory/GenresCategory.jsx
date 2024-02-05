import './GenresCategory.css';
import CheckIcon from "../../assets/plus-icon.svg";
import SeeIcon from "../../assets/eye-seen-icon.svg";

const testdata = {
    "movie": {
        "Western": [
            {
                "film": "Michael Jackson",
                "year_release": 1972,
                "average_rating": 6.7,
                "path_img": '231231.jpg'
            },
            {
                "film": "Michael Jackson",
                "year_release": 1972,
                "average_rating": 6.7,
                "path_img": '231231.jpg'
            }
        ],
        "Science Fiction": [
            {
                "film": "Space Car",
                "year_release": 1972,
                "average_rating": 6.7,
                "path_img": '231231.jpg'
            },
            {
                "film": "Go Go!",
                "year_release": 1972,
                "average_rating": 6.7,
                "path_img": '231231.jpg'
            }
        ]
    }
};


function GenresCategory() {

    return (
        <>
            <section className="genre">
                <div className="genre-title">
                    <h2>Genres</h2>
                    <div className="movie-today--more">
                        <select>
                            <option value="Genre">Genre</option>
                            <option value="Genre">Year</option>
                            <option value="Genre">Rating</option>
                            <option value="Genre">A-Z</option>
                        </select>
                    </div>
                </div>
                <div className="genre-title">
                    <h2>Western</h2>
                    <div className="genre-result">
                        <article className="genre-result--highlighted">
                            <img className="genre-pic" src={moviesMap[0]} alt=""/>
                            <div className="genre-description">
                                <h2>Killer of the Moons</h2>
                                <h4>2019</h4>
                                <div className="movies-today-review">
                                    <span>4.9</span><span><CheckIcon/><SeeIcon className="movies-today--icn"/></span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GenresCategory;