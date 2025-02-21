import { Link } from "react-router-dom";
import { useState } from "react";
import "./navigation.scoped.scss";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navigation">
      <ul className="navigationList">
        <li><Link to="/">Accueil</Link></li>
        
        {/* Menu déroulant pour "Profil" */}
        <li 
          className="dropdown" 
          onMouseEnter={() => setIsDropdownOpen(true)} 
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span>Profil ▾</span>
          {isDropdownOpen && (
            <ul className="dropdownMenu">
              <li><Link to="/12">Utilisateur 12</Link></li>
              <li><Link to="/18">Utilisateur 18</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="#">Réglage</Link></li>
        <li><Link to="#">Communauté</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;