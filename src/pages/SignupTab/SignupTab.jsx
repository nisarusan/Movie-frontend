import './SignupTab.css';
function SignupTab() {

return (
    <>
        <form action="">
            <div className="login-input">
                <label htmlFor="name"><input type="text" placeholder="naam"/></label>
                <label htmlFor="name"><input type="text" placeholder="last name"/></label>
                <label htmlFor="name"><input type="email" placeholder="email"/></label>
                <label htmlFor="name"><input type="password" placeholder="****"/></label>
            </div>
            <button className="btn btn-gradient" type="submit">Registreer</button>
        </form>
    </>
);
}
export default SignupTab;