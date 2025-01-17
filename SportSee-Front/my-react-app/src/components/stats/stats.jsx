import "./stats.scoped.scss"
import Calories from "../../assets/icons/energy.svg";
import Proteines from "../../assets/icons/chicken.svg";
import Glucides from "../../assets/icons/apple.svg";
import Lipides from "../../assets/icons/cheeseburger.svg";

const Stats = () => {
    return (
        <div className="stats">
            <div className="graphSection">
                Texte
            </div>
            <div className="valuesSection">
                <div className="values">
                    <div className="valueIcon">
                        <img src={Calories} alt="Icone de stats" />
                        <div className="value">
                            <p className="number">1,930kCal</p>
                            <p>Calories</p>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon">
                        <img src={Proteines} alt="Icone de stats" />
                        <div className="value">
                            <p className="number">155g</p>
                            <p>Proteines</p>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon">
                        <img src={Glucides} alt="Icone de stats" />
                        <div className="value">
                            <p className="number">290g</p>
                            <p>Glucides</p>
                        </div>
                    </div>
                </div>
                <div className="values">
                    <div className="valueIcon">
                        <img src={Lipides} alt="Icone de stats" />
                        <div className="value">
                            <p className="number">50g</p>
                            <p>Lipides</p>
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