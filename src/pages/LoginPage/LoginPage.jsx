import './LoginPage.css';
import MovieAppLogo from "/src/assets/movieapp.svg?react";

function LoginPage() {
    return (
        <>
            <main>
                <nav>
                    <MovieAppLogo/>
                </nav>
                <section>
                    <div className="login">
                        <div className="login-wrapper">
                            <p>Login
                            </p>
                            <p className="login--active">Signup</p>
                        </div>
                        <form action="">
                            <div className="login-input">
                                <label htmlFor="name"><input type="text" placeholder="naam"/></label>
                                <label htmlFor="name"><input type="email" placeholder="email"/></label>
                                <label htmlFor="name"><input type="text" placeholder="last name"/></label>
                            </div>
                            <button className="btn btn-gradient" type="submit">Registreer</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
        ;


}

export default LoginPage;