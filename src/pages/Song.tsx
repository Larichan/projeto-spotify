import { Link, useParams } from "react-router-dom"
import Player from "../components/Player"
import { songsArray } from "../assets/songs"
import { artistArray } from "../assets/artists";

export default function Song() {

    const { id } = useParams();
    const songObj = songsArray.find(song => song.id === Number(id));
    const artistObj = artistArray.find(artist => artist.name === songObj?.artist);

    const songsOfArtist = songsArray.filter(song => song.artist === songObj?.artist);
    const prevRandomIdSongOfArtist = songsOfArtist[Math.floor(Math.random() * (songsOfArtist.length - 1))].id;
    const fowardRandomIdSongOfArtist = songsOfArtist[Math.floor(Math.random() * (songsOfArtist.length - 1))].id;
    const indexOfCurrentSong = songsOfArtist.findIndex(song => song.id === Number(id));

    const handlePrevId = () => {
        if (indexOfCurrentSong === 0) {
            return songsOfArtist[songsOfArtist.length - 1].id;
        } else {
            return songsOfArtist[indexOfCurrentSong - 1].id;
        }
    }

    const handleFowardId = () => {
        if (indexOfCurrentSong === songsOfArtist.length - 1) {
            return songsOfArtist[0].id;
        } else {
            return songsOfArtist[indexOfCurrentSong + 1].id;
        }
    }

    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src={songObj?.image} alt={`Imagem da música ${songObj?.name}`} />
                </div>
            </div>
            <div className="song__bar">
                <Link to={`/artists/${artistObj?.id}`} className="song__artist-image">
                    <img width={75} height={75} src={artistObj?.image} alt={`Imagem do artista ${songObj?.artist}`} />
                </Link>
                <Player
                    backwardId={handlePrevId()}
                    forwardId={handleFowardId()}
                    duration={songObj?.duration}
                />
                <div>
                    <p className="song__name">{songObj?.name}</p>
                    <p>{songObj?.artist}</p>
                </div>
            </div>
        </div>
    )
}