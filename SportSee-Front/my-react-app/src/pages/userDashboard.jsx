import "./UserDashboard.scoped.scss"
import SideBar from "../components/sideBar/sideBar";
import Stats from "../components/stats/stats";
import Welcome from "../components/welcome/welcome";

const UserDashboard = () => {
    return (
            <div className="dashboard">
                <SideBar />
                <div className="dashboardSection">
                    {/* <div className="welcomeSection">
                        <Welcome />
                    </div>
                    <div className="statsSection">
                        <Stats />
                    </div> */}
                </div>
            </div>
    );
}

export default UserDashboard;