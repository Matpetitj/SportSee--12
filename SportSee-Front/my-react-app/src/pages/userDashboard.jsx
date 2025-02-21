import "./UserDashboard.scoped.scss"
import SideBar from "../components/sideBar/sideBar";
import Stats from "../components/stats/stats";
import Welcome from "../components/welcome/welcome";
import { useParams } from "react-router-dom";

const UserDashboard = () => {
    const { userId } = useParams(); //récupération de l'ID dans l'URL

    return (
            <div className="dashboard">
                <SideBar />
                <div className="dashboardSection">
                        <Welcome userId = {userId} />
                        <Stats userId = {userId} />
                </div>
            </div>
    );
}

export default UserDashboard;