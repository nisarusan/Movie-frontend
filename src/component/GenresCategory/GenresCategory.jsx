import './GenresCategory.css';
import CheckIcon from "../../assets/plus-icon.svg?react";
import SeeIcon from "../../assets/eye-seen-icon.svg?react";

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
                    <div className="genre-option">
                        <select className="genre-select">
                            <option value="Genre">Genre</option>
                            <option value="Genre">Western</option>
                            <option value="Genre">Science Fiction</option>
                            <option value="Genre">Drama</option>
                        </select>
                        <select className="genre-select">
                            <option value="Genre">Year</option>
                            <option value="Genre">Western</option>
                            <option value="Genre">Science Fiction</option>
                            <option value="Genre">Drama</option>
                        </select>
                        <select className="genre-select">
                            <option value="Genre">Rating</option>
                            <option value="Genre">Western</option>
                            <option value="Genre">Science Fiction</option>
                            <option value="Genre">Drama</option>
                        </select>
                        <select className="genre-select">
                            <option value="Genre">A-Z</option>
                            <option value="Genre">Western</option>
                            <option value="Genre">Science Fiction</option>
                            <option value="Genre">Drama</option>
                        </select>
                    </div>
                </div>
                <div className="genre-title">
                    <h2>Western</h2>
                    <div className="genre-result">
                        <article className="genre-result--highlighted">
                            <img className="genre-pic" src="" alt=""/>
                            <div className="genre-description">
                                <h2>Killer of the Moons</h2>
                                <h4>2019</h4>
                                <div className="genre-review">
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