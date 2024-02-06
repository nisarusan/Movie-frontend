import './MoviesPage.css';
import CheckIcon from "../../assets/plus-icon.svg?react";
import SeeIcon from "../../assets/eye-seen-icon.svg?react";
import LibraryButton from "../../component/LibraryButton/LibraryButton.jsx";
import AvatarImg from '../../assets/avatar-image.png';
import MoviesToday from "../../component/MoviesToday/MoviesToday.jsx";

function MoviesPage() {

    return (
        <>
            <section className="movie">
                <div className="movie-img">
                    <img src={AvatarImg} alt=""/>
                </div>
                <div className="movie-detail">
                    <h2>Avatar</h2>
                    <h3>Return to Pandora</h3>
                    <div className="movie-rating">
                        <p>4.6</p>
                    </div>
                    <div className="movie-info">
                        <article className="movie-box">
                            <h3>Lenght</h3>
                            <p>106 min</p>
                        </article>
                        <article className="movie-box">
                            <h3>Language</h3>
                            <p>English</p>
                        </article>
                        <article className="movie-box">
                            <h3>Year</h3>
                            <p>2014</p>
                        </article>
                        <article className="movie-box">
                            <h3>Status</h3>
                            <p>Released</p>
                        </article>
                    </div>
                    <div className="movie-synopsis">
                        <p>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real
                            identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover
                            his true self.
                            Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real
                            identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover
                            his true self.

                            Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real
                            identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover
                            his true self.</p>
                    </div>
                    <div className="movie-favorite">
                                    <CheckIcon/>
                                    <SeeIcon className="movies-today--icn"/>
                             <LibraryButton />
                    </div>
                </div>
            </section>
            <MoviesToday />
        </>
    );
}

export default MoviesPage;