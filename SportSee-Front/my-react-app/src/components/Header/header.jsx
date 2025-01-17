import Navigation from "../navigation/navigation";
import Logo from "../../assets/icons/logo.png";

import "./header.scoped.scss";

const Header = () => {
    return (
        <header>
            <div className="logoContainer">
                <img src={Logo} className="logo" alt="SportSee logo"></img>
            </div>
            <div className="navigationComponent">
                <Navigation />
            </div>
        </header>
    )
}

export default Header;