import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SongList from "../components/SongList";

export default function Artist() {

    const mockArtist = {
        name: "Taylor Swift",
        banner: "https://i.scdn.co/image/ab67618600001016e2952bec9cfd4e6862e23607",
    }

    return (
        <div className="artist">
            <div className="artist__header" style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${mockArtist.banner})` }}>
                <h1 className="artist__title">{mockArtist.name}</h1>
            </div>
            <div className="artist__body">
                <h2>Populares</h2>
                <SongList />
            </div>
            <Link to={`/songs/${mockArtist.name}`}>
                <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
            </Link>
        </div>
    )
}