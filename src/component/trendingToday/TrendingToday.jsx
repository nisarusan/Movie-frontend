import './TrendingToday.css';

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
                    <article className="trending-today--highlighted">
                        <img src="" alt=""/>
                    </article>
                    <article className="trending-today--highlighted">
                        <img src="" alt=""/>
                    </article>
                    <article className="trending-today--highlighted">
                        <img src="" alt=""/>
                    </article>
                </div>

            </section>

        </>
    );
}

export default TrendingToday;