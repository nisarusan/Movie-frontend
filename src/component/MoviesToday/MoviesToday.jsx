import './MoviesToday.css';
import leftMovie from "../../assets/left-movie.png";
import movieMidden from "../../assets/movie-midden.png";
import CheckIcon from '../../assets/plus-icon.svg?react';
import SeeIcon from '../../assets/eye-seen-icon.svg?react';
import movie1 from '../../assets/movie-1.png';
import movie2 from '../../assets/movie-2.png';
import movie3 from '../../assets/movie-3.png';
import movie4 from '../../assets/movie-4.png';
import movie5 from '../../assets/movie-5.png';
import movie6 from '../../assets/movie-6.png';

const moviesMap = [movie1, movie2, movie3, movie4, movie5, movie6];

function MoviesToday() {
    return (
        <>
            <section className="movies-today">
                <div className="movie-today-title">
                    <h2>Movies today</h2>
                    <div className="movie-today--more">
                        <h4>See more</h4>
                    </div>
                </div>
                <div className="movies-today-article">
                    <article className="movies-today--highlighted">
                        <img className="movies-today-pic" src={moviesMap[0]} alt=""/>
                        <div className="movies-today-description">
                            <h2>Killer of the Moons</h2>
                            <h4>2019</h4>
                            <div className="movies-today-review">
                                <span>4.9</span><span><CheckIcon/><SeeIcon className="movies-today--icn"/></span>
                            </div>
                        </div>
                    </article>
                    <article className="movies-today--highlighted">
                        <img className="movies-today-pic" src={moviesMap[1]} alt=""/>
                        <div className="movies-today-description">
                            <h2>Killer of the Moons</h2>
                            <h4>2019</h4>
                            <div className="movies-today-review">
                                <span>4.9</span><span className="movies-today--icn-spacer"><CheckIcon/><SeeIcon
                                className="movies-today--icn"/></span>
                            </div>
                        </div>
                    </article>
                    <article className="movies-today--highlighted">
                        <img className="movies-today-pic" src={moviesMap[2]} alt=""/>
                        <div className="movies-today-description">
                            <h2>Killer of the Moons</h2>
                            <h4>2019</h4>
                            <div className="movies-today-review">
                                <span>4.9</span><span className="movies-today--icn-spacer"><CheckIcon/><SeeIcon
                                className="movies-today--icn"/></span>
                            </div>
                        </div>
                    </article>
                    <article className="movies-today--highlighted">
                        <img className="movies-today-pic" src={moviesMap[3]} alt=""/>
                        <div className="movies-today-description">
                            <h2>Killer of the Moons</h2>
                            <h4>2019</h4>
                            <div className="movies-today-review">
                                <span>4.9</span><span className="movies-today--icn-spacer"><CheckIcon/><SeeIcon
                                className="movies-today--icn"/></span>
                            </div>
                        </div>
                    </article>
                    <article className="movies-today--highlighted">
                        <img className="movies-today-pic" src={moviesMap[4]} alt=""/>
                        <div className="movies-today-description">
                            <h2>Killer of the Moons</h2>
                            <h4>2019</h4>
                            <div className="movies-today-review">
                                <span>4.9</span><span className="movies-today--icn-spacer"><CheckIcon/><SeeIcon
                                className="movies-today--icn"/></span>
                            </div>
                        </div>
                    </article>
                    <article className="movies-today--highlighted">
                        <img className="movies-today-pic" src={moviesMap[5]} alt=""/>
                        <div className="movies-today-description">
                            <h2>Killer of the Moons</h2>
                            <h4>2019</h4>
                            <div className="movies-today-review">
                                <span>4.9</span><span className="movies-today--icn-spacer"><CheckIcon/><SeeIcon
                                className="movies-today--icn"/></span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default MoviesToday;