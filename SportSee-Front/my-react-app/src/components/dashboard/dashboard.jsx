import "./dashboard.scoped.scss";

import SideBar from "../sideBar/sideBar";
import Stats from "../stats/stats";
import Welcome from "../welcome/welcome";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sideBarSection">
                <SideBar />
            </div>
            <div className="dashboardSection">
                <div className="welcomeSection">
                    <Welcome />
                </div>
                <div className="statsSection">
                    <Stats />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;