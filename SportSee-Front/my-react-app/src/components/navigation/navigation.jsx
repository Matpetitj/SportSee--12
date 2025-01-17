import { Link } from 'react-router-dom';

import "./navigation.scoped.scss";

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul className='navigationList'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="#">Profil</Link></li>
                <li><Link to="#">Réglage</Link></li>
                <li><Link to="#">Communauté</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;