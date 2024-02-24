import './MoviesToday.css';
import CheckIcon from '../../assets/plus-icon.svg?react';
import SeeIcon from '../../assets/eye-seen-icon.svg?react';

function MoviesToday(props) {
    const moviesMap = Array.isArray(props.data) ? props.data : [];

    return (
        <section className="movies-today">
            <div className="movie-today-title">
                <h2>{props.title}</h2>
                <div className="movie-today--more">
                    <h4>See more</h4>
                </div>
            </div>
            <div className="movies-today-article">
                {moviesMap.map(({title, releaseDate: release_date, imageUrl: poster_path}, index) => (
                /*{moviesMap.map(({title, release_date, poster_path, vote_average}, index) => (*/
                    <article className="movies-today--highlighted" key={index}>
                        <img className="movies-today-pic" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""/>
                        <div className="movies-today-description">
                            <h2>{title}</h2>
                            <h4>{release_date.substring(0, 4)}</h4>
                            <div className="movies-today-review">
                                {/*<span>{rating.toFixed(1)}</span>*/}
                                <span className="movies-today--icn-spacer">
                                    <CheckIcon/>
                                    <SeeIcon className="movies-today--icn"/>
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default MoviesToday;
