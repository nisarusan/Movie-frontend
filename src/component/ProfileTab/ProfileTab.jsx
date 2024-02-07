import './ProfileTab.css';
import EyeIconOrange from '../../assets/eye-icon-orange.svg?react';
import FavoriteIcon from '../../assets/favorite-icon.svg?react';
import PlusIconOrange from '../../assets/plusicon.svg?react';
import MoviesToday from "../MoviesToday/MoviesToday.jsx";
import TrendingToday from "../trendingToday/TrendingToday.jsx";

function ProfileTab() {
//Later linkjes vervangen met NavLink
    return (
        <>
            <section className="movietab">
                <nav className="tab-bar">
                    <ul>
                        <li>
                            <a className="active" href="/public">
                                <EyeIconOrange /> Gezien
                            </a>
                        </li>
                        <li>
                            <a href="/public">
                           <PlusIconOrange /> Lijst
                            </a>
                        </li>
                        <li>
                            <a href="/public">
                            <FavoriteIcon/> Favorieten
                            </a>
                        </li>
                        <li>
                            <a href="/public">
                                Film beoordeeld
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <TrendingToday />
        </>
    );
}

export default ProfileTab;