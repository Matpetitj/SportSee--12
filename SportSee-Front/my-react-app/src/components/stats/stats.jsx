import "./stats.scoped.scss"
import Calories from "../../assets/icons/energy.svg";
import Proteines from "../../assets/icons/chicken.svg";
import Glucides from "../../assets/icons/apple.svg";
import Lipides from "../../assets/icons/cheeseburger.svg";
import DailyBarChart from "../../components/dailyBarChart/barChart.jsx";
import SessionDuration from "../../components/sessionDuration/duration.jsx";
import Performances from "../../components/performances/performanceRadarChart.jsx";
import Score from "../../components/score/scoreRadialChart.jsx";

const Stats = () => {
    return (
        <div className="stats">
            <div className="graphSection">
                <div className="daily">
                    < DailyBarChart />
                </div>
                <div className="detailsGraph">
                    {/* <SessionDuration />
                    <Performances />
                    <Score /> */}
                </div>
            </div>
            <div className="valuesSection">
                <div className="values">
                    <div className="valueIcon">
                        <img src={Calories} id="calories" alt="Icone de stats" />
                        <div className="value">
                            <p className="number">1,930kCal</p>
                            <p className="type">Calories</p>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon">
                        <img src={Proteines} id="proteines" alt="Icone de stats" />
                        <div className="value">
                            <p className="number">155g</p>
                            <p className="type">Proteines</p>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon">
                        <img src={Glucides} id="glucides" alt="Icone de stats" />
                        <div className="value">
                            <p className="number">290g</p>
                            <p className="type">Glucides</p>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon">
                        <img src={Lipides} id="lipides" alt="Icone de stats" />
                        <div className="value">
                            <p className="number">50g</p>
                            <p className="type">Lipides</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;

// fetch("url")
// .then((response)=>{
// console.log(response);
// if(response.ok) 
// return response.json()
// })
// .then((data)=>{
// console.log(data);
// display(data);
// })
// .catch((error)=>{
// console.log(error.message);
// alert("Veuillez contacter l'admin");
// })