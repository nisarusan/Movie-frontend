import './TrendingToday.css';
import leftMovie from '../../assets/left-movie.png';
import movieMidden from '../../assets/movie-midden.png';
import rightMovie from '../../assets/left-movie.png';

function TrendingToday() {
    return (
        <>
            <section className="trending-today">
                <div className="trending-today-title">
                    <h2>Trending today</h2>
                    <div className="trending-today-btn--slider">
                        <button>

                        </button>
                        <button></button>
                    </div>
                </div>
                <div className="trending-today-movies">
                    {/*<article className="trending-today--highlighted">*/}
                    {/*    <img src={leftMovie} alt=""/>*/}
                    {/*</article>*/}
                    {/*<article className="trending-today--highlighted">*/}
                    {/*    <img src={movieMidden} alt=""/>*/}
                    {/*</article>*/}
                    {/*<article className="trending-today--highlighted">*/}
                    {/*    <img src={leftMovie} alt=""/>*/}
                    {/*</article>*/}
                </div>
            </section>

        </>
    );
}

export default TrendingToday;