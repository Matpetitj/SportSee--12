import "./welcome.scoped.scss";

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcomeMessage">
                <p>Bonjour <span id="welcomeName">Thomas</span></p>
            </div>
            <div className="congratsMessage">
                <p>Félicitation ! Vous avez explosé vos objectifs hier !</p>
            </div>
        </div>
    )
}

export default Welcome;