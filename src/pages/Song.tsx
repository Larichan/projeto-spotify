import { Link } from "react-router-dom"
import Player from "../components/Player"

export default function Song() {

    const mockSong = {
        name: "Xonei",
        artist: "Henrique & Juliano",
        image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
        albumImage: "https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9",
        duration: "02:34",
    }

    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src={mockSong.image} alt={`Imagem da música ${mockSong.name}`} />
                </div>
            </div>
            <div className="song__bar">
                <Link to="/artists/1" className="song__artist-image">
                    <img width={75} height={75} src={mockSong.albumImage} alt={`Imagem do artista ${mockSong.artist}`} />
                </Link>
                <Player />
                <div>
                    <p className="song__name">{mockSong.name}</p>
                    <p>{mockSong.artist}</p>
                </div>
            </div>
        </div>
    )
}