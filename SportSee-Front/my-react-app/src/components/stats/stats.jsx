import "./stats.scoped.scss"
import { useState, useEffect } from "react";
import { getUserScore } from "../../services/APIService.js";

import Calories from "../../assets/icons/energy.svg";
import Proteines from "../../assets/icons/chicken.svg";
import Glucides from "../../assets/icons/apple.svg";
import Lipides from "../../assets/icons/cheeseburger.svg";

import DailyBarChart from "../../components/dailyBarChart/barChart.jsx";
import SessionDuration from "../../components/sessionDuration/duration.jsx";
import Performances from "../../components/performances/performanceRadarChart.jsx";
import Score from "../../components/score/scoreRadialChart.jsx";



const Stats = ({ userId }) => {
    const [nutrients, setNutrients] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            const userData = await getUserScore(userId);
            if(userData) {
                 setNutrients({
                    calories: userData.keyData.calorieCount,
                    proteins: userData.keyData.proteinCount,
                    carbs: userData.keyData.carbohydrateCount,
                    lipids: userData.keyData.lipidCount,
                 });
            }
        };
        if(userId){
            fetchData();
        }
    }, [userId]);

    if(!nutrients){
        return(
            <p className="errorText">Il y a une erreur dans la récupération de vos données</p>//modifier le texte
        )
    }

    return (
        <div className="stats">
            <div className="graphSection">
                <div className="daily">
                    < DailyBarChart userId={userId} />
                </div>
                <div className="detailsGraph">
                    <SessionDuration userId={userId}/>
                    <Performances userId={userId}/>
                    <Score userId={userId}/>
                </div>
            </div>
            <div className="valuesSection">
                <div className="values">
                    <div className="valueIcon" id="calories">
                        <img src={Calories} alt="Icone de stats" />
                    </div>
                    <div className="value">
                        <p className="number">{nutrients.calories.toLocaleString()}kCal</p>
                        <p className="type">Calories</p>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon" id="proteines">
                        <img src={Proteines} alt="Icone de stats" />
                    </div>
                    <div className="value">
                        <p className="number">{nutrients.proteins}g</p>
                        <p className="type">Proteines</p>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon" id="glucides">
                        <img src={Glucides}  alt="Icone de stats" />
                    </div>
                    <div className="value">
                        <p className="number">{nutrients.carbs}g</p>
                        <p className="type">Glucides</p>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon" id="lipides">
                        <img src={Lipides} alt="Icone de stats" />
                    </div>
                    <div className="value">
                        <p className="number">{nutrients.lipids}g</p>
                        <p className="type">Lipides</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;