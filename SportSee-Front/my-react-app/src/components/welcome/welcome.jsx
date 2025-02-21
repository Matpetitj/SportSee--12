import "./welcome.scoped.scss";
import { useEffect, useState } from "react";
import { getUserScore } from "../../services/APIService";

const Welcome = ({userId}) => {
    const [firstName, setFirstName] = useState(""); // State pour stocker le prénom
    useEffect(() => {
        const fetchData = async () => {
                const userData = await getUserScore(userId);
                console.log(userData);
                if(userData){
                    setFirstName(userData.firstName)
                }
        };
        if(userId){
            fetchData();
        }
    }, [userId]); // Se déclenche si le userId change
    
    //ajouter un cas d'erreur if() ici

    return (
        <div className="welcome">
            <div className="welcomeMessage">
                <p>Bonjour <span id="welcomeName">{firstName || "Utilisateur"}</span></p>
            </div>
            <div className="congratsMessage">
                <p>Félicitation ! Vous avez explosé vos objectifs hier !</p>
            </div>
        </div>
    )
}

export default Welcome;