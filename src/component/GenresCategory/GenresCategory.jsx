import './GenresCategory.css';
import CheckIcon from "../../assets/plus-icon.svg";
import SeeIcon from "../../assets/eye-seen-icon.svg";
function GenresCategory() {
 
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

export default GenresCategory;