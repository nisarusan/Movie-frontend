import './FeaturedMovieIntro.css';

export default function FeaturedMovieIntro() {
    return (
        <>
            <section className="intro-movie">
                <div className="intro-movie-description"><h2>
                    Avatar
                </h2>
                    <p>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities
                        undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true
                        self.</p>
                    <p className="intro-movie-color--grey">
                        GENRES</p>
                    <p className="intro-movie-color--blue">
                        Romance, Drama
                    </p>
                    <div className="intro-movie-button">
                        <button>Watch</button>
                        <button>MyList +</button>
                    </div>
                    <div className="intro-movie-score">
                    </div>
                </div>
                <div className="intro-movie-image">
                    <img src="/src/assets/avatar-image.png" alt="" />
                </div>

            </section>
        </>
    );
}

