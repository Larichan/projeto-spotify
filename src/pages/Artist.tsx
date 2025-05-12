import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/artists";
import { songsArray } from "../assets/songs";

export default function Artist() {

    const { id } = useParams();
    const artistObj = artistArray.find(artist => artist.id === Number(id));
    const songsOfArtist = songsArray.filter(song => song.artist === artistObj?.name)

    const randomSongOfArtistId = songsOfArtist[Math.floor(Math.random() * (songsOfArtist.length - 1))].id;

    return (
        <div className="artist">
            <div className="artist__header" style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj?.banner})` }}>
                <h1 className="artist__title">{artistObj?.name}</h1>
            </div>
            <div className="artist__body">
                <h2>Populares</h2>
                <SongList songs={songsOfArtist} />
            </div>
            <Link to={`/songs/${songsOfArtist[0].id}`} className="single-item">
                <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
            </Link>
        </div>
    )
}