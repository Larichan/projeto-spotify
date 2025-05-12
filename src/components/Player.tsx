import { faBackwardStep, faCirclePlay, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Player() {

    const mockObj = {
        backwardId: 1,
        forwardId: 2,
        duration: "02:34",
    }

    return (
        <div className="player">
            <div className="player__controllers">
                <Link to={`/songs/${mockObj.backwardId}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
                </Link>
                <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
                <Link to={`/songs/${mockObj.forwardId}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
                </Link>
            </div>
            <div className="player__progress">
                <p>00:00</p>
                <div className="player__bar">
                    <div className="player__bar-progress"></div>
                </div>
                <p>{mockObj.duration}</p>
            </div>
        </div>
    )
}
