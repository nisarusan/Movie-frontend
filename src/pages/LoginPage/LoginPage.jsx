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
                            <p>login
                            </p>
                            <p>Signup</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
        ;


}

export default LoginPage;