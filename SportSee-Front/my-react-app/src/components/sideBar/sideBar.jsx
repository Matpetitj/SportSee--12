import "./sideBar.scoped.scss";
import Yoga from "../../assets/icons/yoga.png"
import Swimming from "../../assets/icons/swimming.png"
import Cycling from "../../assets/icons/cycling.png"
import Lifting from "../../assets/icons/lifting.png"

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="sportCTA">
                <div className="btnLateral">
                    <img src={Yoga} alt="Bouton latéral Yoga" />
                </div>
                <div className="btnLateral">
                    <img src={Swimming} alt="Bouton latéral Natation" />
                </div>
                <div className="btnLateral">
                    <img src={Cycling} alt="Bouton latéral Vélo" />
                </div>
                <div className="btnLateral">
                    <img src={Lifting} alt="Bouton latéral Musculation" />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </div>
    )
}

export default SideBar;