import './UserProfile.css';
import UserAvatar from '../../assets/user-avatar.jpeg';
function UserProfile() {
 
return (
<>
   <section className="user">
    <div className="user-avatar">
        <img src={UserAvatar} name="user" className="user-img" alt="user image"/>
    </div>
    <div className="user-edit">
        <h2>Profiel bewerken</h2>
        <form name="user profile" className="user-profile">
            <p>Naam</p>
            <input type="text" name="name" value="naam" />
            <p>Email</p>
            <input type="email" name="email" value="nizar.abak@live.nl" />
            <p>Geslacht</p>
            <input type="text" name="gender" value="-"/>
            <p>Omschrijving</p>
            <input type="text" name="description" min="100" maxLength="2500" />
        </form>
        <hr />
    </div>
   </section>
</>
);
}
export default UserProfile;