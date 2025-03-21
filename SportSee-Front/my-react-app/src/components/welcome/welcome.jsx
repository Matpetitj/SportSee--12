import "./welcome.scoped.scss";
import { useEffect, useState } from "react";
import { getUserScore } from "../../services/APIService";

const Welcome = ({ userId }) => {
    const [firstName, setFirstName] = useState(""); // State pour stocker le prénom

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserScore(userId);
                if (userData && userData.firstName) {
                    setFirstName(userData.firstName);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du prénom :", error);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]); // Se déclenche si le userId change

    return (
        <div className="welcome">
            <div className="welcomeMessage">
                <p>Bonjour <span id="welcomeName">{firstName || "Utilisateur"}</span></p>
            </div>
            {firstName && ( // Affichage conditionnel du message de félicitations
                <div className="congratsMessage">
                    <p>Félicitation ! Vous avez explosé vos objectifs hier !</p>
                </div>
            )}
        </div>
    );
};

export default Welcome;